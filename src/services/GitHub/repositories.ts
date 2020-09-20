import api from './api';

export const listRepositoriesByUserName = async (userName: string) => {
  const response = await api.get(`/users/${userName}/repos`);

  return response.data;
};

export const getUser = async (userName: string) => {
  const response = await api.get(`/users/${userName}`);

  return response.data;
};
