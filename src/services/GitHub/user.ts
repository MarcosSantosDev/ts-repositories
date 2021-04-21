import api from './api';
import { UserProps } from '../../types';

export const getUserByUserName = async (userName: string) => {
  return api.get<UserProps>(`/users/${userName}`);
};
