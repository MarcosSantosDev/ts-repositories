import api from './api';
import { RepositoryProps } from '../../types';

export const getRepositoriesByUserName = async (userName: string) => {
  return api.get<RepositoryProps[]>(`/users/${userName}/repos`);
};
