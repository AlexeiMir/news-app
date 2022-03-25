import { AxiosInstance } from 'axios';
import { ApiPaths } from './constants';
import { ICreateUserData, ILoginData, ResponseUser } from './types';

export const UserApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<ResponseUser[]>(ApiPaths.Users);
    return data;
  },

  async register(dto: ICreateUserData) {
    const { data } = await instance.post<ICreateUserData, { data: ResponseUser }>(ApiPaths.Register, dto);
    return data;
  },

  async login(dto: ILoginData) {
    const { data } = await instance.post<ILoginData, { data: ResponseUser }>(ApiPaths.Login, dto);
    return data;
  },

  async getMe() {
    const { data } = await instance.get<ResponseUser>(ApiPaths.Me);
    return data;
  },
});
