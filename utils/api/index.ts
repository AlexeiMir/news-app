import axios from 'axios';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import Cookies, { parseCookies } from 'nookies';
import { UserApi } from './user';

export interface ApiReturnType {
  user: ReturnType<typeof UserApi>;
  post: ReturnType<typeof PostApi>;
  comment: ReturnType<typeof CommentApi>;
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext) => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies();
  const token = cookies.rtoken;

  const instance = axios.create({
    baseURL: 'http://localhost:7777',
    headers: {
      Authorization: `Bearer${token}`,
    },
  });

  const apis = {
    user: UserApi,
    post: PostApi,
    comment: CommentApi,
  };

  const result = Object.entries(apis).reduce(
    (acc, [key, func]) => ({
      ...acc,
      [key]: func(instance),
    }),
    {} as ApiReturnType,
  );
};
