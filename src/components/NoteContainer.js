import React, { useState, useContext } from 'react';
import Notes from './Notes';
import NoteForm from './NoteForm';
import { AuthContext } from '../AuthContext';

const NoteContainer = () => {
  const { logout } = useContext(AuthContext);
  const [selectNote, setSelectNote] = useState(null);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <div className='justify-content-end d-flex mb-3 '>
        <button
          className='btn btn-secondary btn-block-r'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className=' container border'>
        <h2 className='p-2 text-muted'>G Notes</h2>
        <div className='row border-r'>
          <div className='col-md-4 col-sm-12 border p-0'>
            <Notes handleSelectNote={(note) => setSelectNote(note)} />
          </div>
          <div className='col-md-8 col-sm-12 border-top p-0'>
            <div className='justify-content-end d-flex '>
              <button
                className='btn btn-tertiary border py-1 m-3 add-note'
                onClick={() => setSelectNote(null)}
              >
                <span className='add-note-plus'>+</span>Add Note
              </button>
            </div>
            <NoteForm selectNote={selectNote} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteContainer;
