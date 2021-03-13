import { Dispatch } from 'react';
import axios from 'axios';

import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      const params = { params: { text: term } };
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', params);

      const repositories = data.objects.map((repository: any) => repository.name);

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: repositories
      });

    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message
      });
    }
  };
};