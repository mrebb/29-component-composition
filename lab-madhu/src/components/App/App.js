import React, { Component, Fragment } from 'react';
import NoteCreateForm from './NoteCreateForm/NoteCreateForm';
import NotesList from './NotesList/NotesList';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };
  }
  addNotes = note => {
    console.log(note);
    this.setState({
      notes: [...this.state.notes, note],
    });
  };
  removeNote = id => {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  };
  updateNote = updatedNote => {
    console.log(updatedNote);
    const notes = this.state.notes;
    const index = notes.findIndex(note => note.id === updatedNote.id);
    notes[index] = updatedNote;
    this.setState({ notes });
  };
  render() {
    return (
      <Fragment>
        <NoteCreateForm onSubmit={this.addNotes} />
        <NotesList
          notes={this.state.notes}
          onRemove={this.removeNote}
          onUpdate={this.updateNote}
        />
      </Fragment>
    );
  }
}
