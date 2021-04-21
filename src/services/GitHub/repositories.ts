import api from './api';
import { RepositoryProps } from '../../types';

export const getRepositoriesByUserName = async (userName: string) => {
  const response = await api.get(`/users/${userName}/repos`);

  const repositories: RepositoryProps[] = response.data;

  return repositories;
};
