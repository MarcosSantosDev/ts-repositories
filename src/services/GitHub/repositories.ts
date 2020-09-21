import api from './api';
import { RepositoryProps, UserProps } from '../../types';

export const listRepositoriesByUserName = async (userName: string) => {
  const response = await api.get(`/users/${userName}/repos`);

  const repositories: RepositoryProps[] = response.data;

  return repositories;
};

export const getUser = async (userName: string) => {
  const response = await api.get(`/users/${userName}`);
  const user: UserProps = response.data;
  return user;
};
