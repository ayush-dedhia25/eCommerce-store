import { combineReducers } from 'redux';
import addFormReducer from './addForm';

const rootReducer = combineReducers({
   formData: addFormReducer
});

export default rootReducer;