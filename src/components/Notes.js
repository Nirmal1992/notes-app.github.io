import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/reduxMapper';
import Note from './Note';

const Notes = ({ notes, removeNote, handleSelectNote, editNoteState }) => {
  return notes.map((note) => (
    <Note
      key={note.id}
      note={note}
      removeNote={() => removeNote(note.id)}
      handleSelectNote={() => {
        handleSelectNote(note);
        editNoteState();
      }}
    />
  ));
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
