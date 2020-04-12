import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const initialState = { title: '', body: '', id: null };
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.title || !state.body) return;
    addNote(state);
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
          Save
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
