import * as actions from '../actionTypes';
import { ProductFormData } from '../../pages/type';

export const addFormData = (data: ProductFormData) => {
   return {
      type: actions.ADD_FORM_DATA,
      payload: data
   }
}