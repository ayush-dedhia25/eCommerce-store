import rootReducer from './reducers/index';

export type ActionTypes = 'ADD_FORM_DATA';

export interface Action {
   type: ActionTypes;
   payload: any;
}

export type RootState = ReturnType<typeof rootReducer>;