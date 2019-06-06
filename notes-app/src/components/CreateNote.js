import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note_description: '',
            note_responsible: '',
            note_completed: false
        }
        this.onChangeNoteDescription = this.onChangeNoteDescription.bind(this);
        this.onChangeNoteResponsible = this.onChangeNoteResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeNoteDescription(e) {
        this.setState({
            note_description: e.target.value
        });
    }

    onChangeNoteResponsible(e) {
        this.setState({
            note_responsible: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Note Description: ${this.state.note_description}`);
        console.log(`Note Responsible: ${this.state.note_responsible}`);

        const newNote = {
            note_description: this.state.note_description,
            note_responsible: this.state.note_responsible,
            note_completed: this.state.note_completed
        };

        axios.post('http://localhost:5000/notes/add', newNote)
            .then(res => console.log(res.data));
        
        this.setState({
            note_description: '',
            note_responsible: '',
            note_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Note</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.note_description}
                                onChange={this.onChangeNoteDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.note_responsible}
                                onChange={this.onChangeNoteResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Note" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}