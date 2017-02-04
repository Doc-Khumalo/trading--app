import React, { Component } from 'react';
import NoteList from './NoteList';
import './Notes.css';
import notesLogo from './../../assets/images/notes-image.png';

let notes = [
    {
        id: 1,
        date: "Nov-10",
        author: "Bruce Wayne",
        text: "Well done!"
    },
    {
        id: 2,
        date: "Nov-10",
        author: "Marry Poppins",
        text: "Good to go"
    }
];

class Dashboard extends Component {

    render() {
        return (
          <div className="notesWrapper">
              <p className="headerLight">
                 Last Notes
                  <img
                    alt="Incoming call" src={notesLogo}
                    className="notesLogo"
                  />
              </p>
              <NoteList notes={ notes } />
          </div>
        );
    }
}

export default Dashboard;