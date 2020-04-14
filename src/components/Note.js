import React from 'react';

const Note = ({ note: { title, body }, removeNote, handleSelectNote }) => {
  return (
    <div className='note border text-dark position-relative'>
      <div className='mr-2'>
        <h2>{title}</h2>
        <p>{body}</p>
        <button
          type='button'
          className='btn btn-primary'
          onClick={handleSelectNote}
        >
          Edit
        </button>
      </div>
      <button
        onClick={removeNote}
        type='button'
        className='close position-absolute note-btn'
      >
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
  );
};

export default Note;
