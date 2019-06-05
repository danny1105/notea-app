const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Note = new Schema({
    note_description: {
        type: String
    },
    note_responsible: {
        type: String
    },
    note_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('notes', Note);