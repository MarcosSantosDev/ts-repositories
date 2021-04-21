import actions from '../gitHub/actions';
import { getRepositoriesByUserName } from '../../services/GitHub/repositories';
import { getUserByUserName } from '../../services/GitHub/user';

export const getAllRepositories = (user: string) => ((dispatch: any) => {
  getRepositoriesByUserName(user)
    .then((repositories: any) => dispatch(actions.getAllRepositories(repositories)));
});

export const getUser = (user: string) => ((dispatch: any) => {
  getUserByUserName(user)
    .then((userData: any) => dispatch(actions.getUser(userData)));
});
