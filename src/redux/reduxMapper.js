import { addNote, removeNote, editNote, getNote, getNotes } from './ducks/note';
import { addNewNoteState, editNoteState } from './ducks/formState';

export const mapStateToProps = (state) => ({
  notes: state.note,
  formState: state.formState
});

export const mapDispatchToProps = {
  addNote,
  removeNote,
  editNote,
  getNote,
  getNotes,
  addNewNoteState,
  editNoteState
};
