import React, { Component } from 'react';
import axios from 'axios';

export default class Editnote extends Component {

    constructor(props) {
        super(props);

        this.onChangeNoteDescription = this.onChangeNoteDescription.bind(this);
        this.onChangeNoteResponsible = this.onChangeNoteResponsible.bind(this);
        this.onChangeNoteCompleted = this.onChangeNoteCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            note_description: '',
            note_responsible: '',
            note_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/notes/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    note_description: response.data.note_description,
                    note_responsible: response.data.note_responsible,
                    note_completed: response.data.note_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeNoteCompleted(e) {
        this.setState({
            note_completed: !this.state.note_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            note_description: this.state.note_description,
            note_responsible: this.state.note_responsible,
            note_completed: this.state.note_completed
        };
        console.log(obj);
        axios.post('http://localhost:5000/notes/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update note</h3>
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
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update note" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}