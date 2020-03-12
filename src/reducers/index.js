import { combineReducers } from 'redux';
import { selectedFileReducer } from './reducer_selected_file';

const rootReducer = combineReducers({
  selectedFile: selectedFileReducer
});

export default rootReducer;
