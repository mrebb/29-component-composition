import React from 'react';
import NoteItem from './NoteItem/NoteItem';

export default props => (
  <ul>
    {props.notes.length > 0 &&
      props.notes.map(note => (
        <NoteItem key={note.id} note={note} {...props} />
      ))}
  </ul>
);
