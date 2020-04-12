import React, { useState, useContext } from 'react';
import Notes from './Notes';
import { v4 as uuidv4 } from 'uuid';
import NoteForm from './NoteForm';
import { AuthContext } from '../AuthContext';

const NoteContainer = () => {
  const initialNotes = [
    {
      title: 'Title 1',
      body:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.Obcaecati animi.',
      id: 1
    },
    {
      title: 'Title 2',
      body:
        'Earum nostrum sapiente facere natusculpa qui possimus voluptate et eos!',
      id: 2
    },
    {
      title: 'Title 3',
      body:
        'Voluptatum ipsa consectetur, earum nostrum sapiente facere natusculpa qui.',
      id: 3
    }
  ];
  const [notes, setNotes] = useState(initialNotes);
  const { logout } = useContext(AuthContext);

  const addNote = (note) => {
    note.id = uuidv4();
    setNotes([...notes, note]);
  };

  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

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
            <Notes notes={notes} removeNote={removeNote} />
          </div>
          <div className='col-md-8 col-sm-12 border-top p-0'>
            <div className='justify-content-end d-flex '>
              <button className='btn btn-tertiary border py-1 m-3 add-note'>
                <span className='add-note-plus'>+</span>Add Note
              </button>
            </div>
            <NoteForm addNote={addNote} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteContainer;
