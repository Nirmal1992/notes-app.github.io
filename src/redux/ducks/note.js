const ADD_NOTE = 'notes-app/ADD_NOTE';
const REMOVE_NOTE = 'notes-app/REMOVE_NOTE';
const EDIT_NOTE = 'notes-app/EDIT_NOTE';
const GET_NOTE = 'notes-app/GET_NOTE';
const GET_NOTES = 'notes-app/GET_NOTES';

const initialState = [
  {
    title: 'Title 1',
    body:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.Obcaecati animi.',
    id: '1'
  },
  {
    title: 'Title 2',
    body:
      'Earum nostrum sapiente facere natusculpa qui possimus voluptate et eos!',
    id: '2'
  },
  {
    title: 'Title 3',
    body:
      'Voluptatum ipsa consectetur, earum nostrum sapiente facere natusculpa qui.',
    id: '3'
  }
];

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    note
  };
};

export const removeNote = (id) => {
  return {
    type: REMOVE_NOTE,
    id
  };
};

export const editNote = (note) => {
  return {
    type: EDIT_NOTE,
    note
  };
};

export const getNote = (id) => {
  return {
    type: GET_NOTE,
    id
  };
};

export const getNotes = () => {
  return {
    type: GET_NOTES
  };
};

export default function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case REMOVE_NOTE:
      return state.filter((note) => note.id !== action.id);
    case EDIT_NOTE: {
      const index = state.findIndex((note) => note.id === action.note.id);
      return [...state.slice(0, index), action.note, ...state.slice(index + 1)];
    }
    case GET_NOTE:
      return state.filter((note) => note.id !== action.id);
    case GET_NOTES:
      return state;
    default:
      return state;
  }
}
