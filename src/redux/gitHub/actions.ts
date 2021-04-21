import * as constants from './constants';

const actions = {
  getAllRepositories: () => ({
    type: constants.GET_ALL_REPOSITORIES,
    payload: null,
  }),
  getAllRepositoriesSuccess: (repositories: any) => ({
    type: constants.GET_ALL_REPOSITORIES_SUCCESS,
    payload: repositories,
  }),
  getAllRepositoriesFail: (error: any) => ({
    type: constants.GET_ALL_REPOSITORIES_FAIL,
    payload: error,
  }),
  getUser: () => ({
    type: constants.GET_USER,
    payload: null,
  }),
  getUserSuccess: (user: any) => ({
    type: constants.GET_USER_SUCCESS,
    payload: user,
  }),
  getUserFail: (error: any) => ({
    type: constants.GET_USER_FAIL,
    payload: error,
  }),
};

export default actions;
