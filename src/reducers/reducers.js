import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

const COMPOSITIONS = 'compositions';
const SORT = 'sort';

const DEFAULTSORT = 'asc';

const defaultState = {
  [COMPOSITIONS]: [],
  [SORT]: {
    artist: DEFAULTSORT,
    song: DEFAULTSORT,
    genre: DEFAULTSORT,
    year: DEFAULTSORT
  }
};

export const compositions = localState => localState[COMPOSITIONS];
export const sort = localState => localState[SORT];

const reducers = {
  [actionTypes.refreshCompositions]: (state, action) => ({ ...state, [COMPOSITIONS]: action.payload }),
  [actionTypes.changeSort]: (state, action) => ({ ...state, [SORT]: {
      ...state[SORT], [action.payload.filter]: action.payload.value
  }}),
  [actionTypes.addComposition]: (state, action) => ({ ...state, [COMPOSITIONS]: [
      ...state[COMPOSITIONS], action.payload
  ]})
};

export default handleActions(reducers, defaultState);

