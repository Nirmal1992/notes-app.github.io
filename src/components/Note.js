import React from 'react';

const Note = ({ note: { title, body }, removeNote }) => {
  return (
    <div className='note border text-dark position-relative'>
      <div className='mr-2'>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <button onClick={removeNote} className='btn note-btn position-absolute'>
        X
      </button>
    </div>
  );
};

export default Note;
