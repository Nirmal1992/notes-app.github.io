const ADD_NEW_NOTE_STATE = 'notes-app/ADD_NEW_NOTE_STATE';
const EDIT_NOTE_STATE = 'notes-app/EDIT_NOTE_STATE';

const ADD = 'ADD';
const EDIT = 'EDIT';

export const addNewNoteState = () => {
  return {
    type: ADD_NEW_NOTE_STATE
  };
};

export const editNoteState = () => {
  return {
    type: EDIT_NOTE_STATE
  };
};

export default function formStateReducer(state = ADD, action) {
  switch (action.type) {
    case ADD_NEW_NOTE_STATE:
      return ADD;
    case EDIT_NOTE_STATE:
      return EDIT;
    default:
      return state;
  }
}
