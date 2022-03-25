import { AxiosInstance } from 'axios';
import { OutputData } from '@editorjs/editorjs';

interface SearchPostDto {
  title?: string;
  body?: string;
  views?: 'DESC' | 'ASC';
  limit?: number;
  take?: number;
  tag?: string;
}

interface CreatePostDto {
  title: string;
  body: OutputData['blocks'];
}

export const PostApi = (instance: AxiosInstance) => ({});
