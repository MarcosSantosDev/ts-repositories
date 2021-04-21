import * as constants from './constants';

interface GitHubInitialState {
  user: {
    data: null;
    isFetching: boolean;
    error: null;
  };
  repositories: {
    data: never[];
    isFetching: boolean;
    error: null;
  };
}

interface ActionProps {
  type: string;
  payload: any;
}

export const INITIAL_STATE: GitHubInitialState = {
  user: {
    data: null,
    isFetching: false,
    error: null,
  },
  repositories: {
    data: [],
    isFetching: false,
    error: null,
  },
};

export default (state: GitHubInitialState = INITIAL_STATE, action: ActionProps) => {
  switch (action.type) {
    case constants.GET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          error: null,
          isFething: true,
        },
      };
    case constants.GET_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          data: action.payload,
          error: null,
          isFething: false,
        },
      };
    case constants.GET_USER_FAIL:
      return {
        ...state,
        user: {
          ...state.user,
          error: action.payload,
          isFething: false,
        },
      };
    case constants.GET_ALL_REPOSITORIES:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          error: null,
          isFething: true,
        },
      };
    case constants.GET_ALL_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          data: action.payload,
          error: null,
          isFething: false,
        },
      };
    case constants.GET_ALL_REPOSITORIES_FAIL:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          error: action.payload,
          isFething: false,
        },
      };
    default:
      return state;
  }
};
