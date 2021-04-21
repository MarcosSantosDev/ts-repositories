import api from './api';
import { UserProps } from '../../types';

export const getUserByUserName = async (userName: string) => {
  const response = await api.get(`/users/${userName}`);
  const user: UserProps = response.data;
  return user;
};
