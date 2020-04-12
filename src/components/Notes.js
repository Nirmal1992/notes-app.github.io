import React from 'react';
import Note from './Note';

const Notes = ({ notes, removeNote }) => {
  return notes.map((note) => (
    <Note key={note.id} note={note} removeNote={() => removeNote(note.id)} />
  ));
};

export default Notes;
