import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Note = props => (
    <tr>
        <td>{props.note.note_description}</td>
        <td>{props.note.note_responsible}</td>
        <td>{props.note.note_priority}</td>
        <td>
            <Link to={"/edit/"+props.note._id}>Edit</Link>
        </td>
    </tr>
)


export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {notes: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/notes/')
            .then(response => {
                this.setState({ notes: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.notes.map(function(currentNote, i){
            return <Note note={currentNote} key={i} />;
        })
    }


    render() {
        return (
            <div>
                <h3>Notes List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.NoteList() }
                    </tbody>
                </table>
            </div>
        )
    }
}