import { OutputData } from '@editorjs/editorjs';

export interface ILoginData {
  email: string;
  password: string;
}

export interface ICreateUserData extends ILoginData {
  fullName: string;
}

export interface ResponseUser {
  createdAt: string;
  email: string;
  fullName: string;
  id: number;
  commentsCount?: number;
  token: string;
  updatedAt: string;
}

export interface PostItem {
  title: string;
  body: OutputData['blocks'];
  description: string;
  tags: null | string;
  id: number;
  views: number;
  user: ResponseUser;
  createdAt: string;
  updatedAt: string;
}

export interface CommentItem {
  id: number;
  text: string;
  post: PostItem;
  user: ResponseUser;
  createdAt: string;
  updatedAt: string;
}
