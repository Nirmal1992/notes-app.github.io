import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/reduxMapper';

const NoteForm = ({
  addNote,
  selectNote,
  editNote,
  formState,
  addNewNoteState
}) => {
  const initialState = { title: '', body: '', id: null };
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    selectNote && setState(selectNote);
  }, [selectNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.title || !state.body) return;
    let note = state;
    if (note.id) {
      editNote(note);
      addNewNoteState();
    } else {
      note.id = uuidv4();
      addNote(note);
    }

    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className='note-form'>
      <div className='form-group'>
        <label htmlFor='title'>Title:</label>
        <input
          id='title'
          name='title'
          className='form-control'
          value={state.title}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='body'>Body:</label>
        <textarea
          id='body'
          name='body'
          value={state.body}
          onChange={handleChange}
          rows='10'
          className='form-control'
        />
      </div>
      <div className='justify-content-end d-flex '>
        <button type='submit' className='btn btn-primary btn-lg btn-block-r'>
          {formState === 'EDIT' ? 'Edit & Save' : 'Add New Note'}
        </button>
      </div>
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
