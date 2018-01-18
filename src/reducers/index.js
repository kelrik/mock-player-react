import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as reducer from './reducers';

const reducerName = 'app';
const reducers = reducer.default;

export default combineReducers({
  app: reducers,
  form: formReducer
})

// Selectors

export const selectors = {
  getCompositions: state => reducer.compositions(state[reducerName]),
  getSort: state => reducer.sort(state[reducerName])
};
