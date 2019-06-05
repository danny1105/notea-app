const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');   
const noteRoutes = express.Router();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const Notes = require('./models/Notes');

mongoose.connect('mongodb://ashish:ashish1105@ds133187.mlab.com:33187/notes', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

noteRoutes.route('/').get(function(req, res) {
    Notes.find(function(err, notes) {
        if (err) {
            console.log(err);
        } else {
            res.json(notes);
        }
    });
});

noteRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Notes.findById(id, function(err, note) {
        res.json(note);
    });
});

noteRoutes.route('/update/:id').post(function(req, res) {
    Notes.findById(req.params.id, function(err, note) {
        if (!note)
            res.status(404).send("Note is not found");
        else
            note.note_description = req.body.note_description;
            note.note_responsible = req.body.note_responsible;
            todo.note_completed = req.body.note_completed;

            note.save().then(note => {
                res.json('Note updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

noteRoutes.route('/add').post(function(req, res) {
    let notes = new Notes(req.body);
    notes.save()
        .then(note => {
            res.status(200).json({'note': 'note added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new note failed');
        });
});

app.use('/notes', noteRoutes);

app.listen(PORT, function() {
    console.log(`Server is running on Port: ${PORT}`);
});