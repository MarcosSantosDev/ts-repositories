import actions from '../gitHub/actions';
import { getRepositoriesByUserName } from '../../services/GitHub/repositories';
import { getUserByUserName } from '../../services/GitHub/user';

export const getAllRepositories = (user: string) => ((dispatch: any) => {
  dispatch(actions.getAllRepositories());
  getRepositoriesByUserName(user)
    .then((repositories: any) => dispatch(actions.getAllRepositoriesSuccess(repositories.data)))
    .catch((error: any) => dispatch(actions.getAllRepositoriesFail(error)));
});

export const getUser = (user: string) => ((dispatch: any) => {
  dispatch(actions.getUser());
  getUserByUserName(user)
    .then((userData: any) => dispatch(actions.getUserSuccess(userData.data)))
    .catch((error: any) => dispatch(actions.getUserFail(error)));
});
