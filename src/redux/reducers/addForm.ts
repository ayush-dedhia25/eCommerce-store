import { Action } from '../type';
import * as actions from '../actionTypes';

const addFormData = (state = {}, action: Action) => {
   switch (action.type) {
      case actions.ADD_FORM_DATA:
         return {...state, ...action.payload }
      default:
      return state;
   }
}

export default addFormData;