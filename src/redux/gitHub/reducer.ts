import * as constants from './constants';

export const INITIAL_STATE = {
  user: null,
  repositories: [],
};

export default (state = INITIAL_STATE, action: { type: string, payload: any }) => {
  switch (action.type) {
    case constants.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case constants.GET_ALL_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    default:
      return state;
  }
};
