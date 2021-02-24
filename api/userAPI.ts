import { API } from '.';
import { User } from '../interfaces/user';

export const createUser = async (user: User) => {
  return await API.post('/users', user);
};

export const getUser = async (email: string) => {
  return await API.get(`/users/${email}`);
};

interface LoginUser {
  email: string;
  password: string;
}
export const loginUser = async (user: LoginUser) => {
  return await API.post('/auth/login', user);
};
