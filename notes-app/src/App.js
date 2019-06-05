import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NoteList from './components/NoteList';
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">NoteService</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Notes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Note</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={NoteList} />
          <Route path="/edit/:id" component={EditNote} />
          <Route path="/create" component={CreateNote} />
        </div>
      </Router>
          );
  }
}

export default App;
