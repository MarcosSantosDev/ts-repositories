import * as constants from './constants';

const actions = {
  getAllRepositories: (repositories: any) => ({
    type: constants.GET_ALL_REPOSITORIES,
    payload: repositories,
  }),
  getUser: (user: any) => ({
    type: constants.GET_USER,
    payload: user,
  }),
};

export default actions;
