import { orderBy } from 'lodash';
import { createAction } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import api from '../services/api';
import { selectors } from '../reducers/index';
import { getFormValues } from 'redux-form';

export const deleteComposition = createAction(actionTypes.deleteComposition);
export const addComposition = createAction(actionTypes.addComposition);
export const refreshCompositions = createAction(actionTypes.refreshCompositions);
export const changeSort = createAction(actionTypes.changeSort, (filter, value) => ({ filter, value }));

export const fetchAll = () => {
  return (dispatch) => {
    api.fetchPlaylist().then((playlist) => {
      dispatch(refreshCompositions(playlist));
    });
  }
};

export const sortPlaylist = (filter) => {
  return (dispatch, getState) => {
    const playlist = selectors.getCompositions(getState());
    const sort = (selectors.getSort(getState())[filter] === 'asc') ? 'desc' : 'asc';

    dispatch(changeSort(filter, sort));
    dispatch(refreshCompositions(orderBy(playlist, [filter], sort)));
  };
};

export const createNewRecord = () => {
  return (dispatch, getState) => {
    const composition = getFormValues('simple')(getState());

    dispatch(addComposition(composition));
  };
};