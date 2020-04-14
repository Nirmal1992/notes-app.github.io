import { combineReducers } from 'redux';
import noteReducer from './ducks/note';
import formStateReducer from './ducks/formState';

export default combineReducers({
  note: noteReducer,
  formState: formStateReducer
});
