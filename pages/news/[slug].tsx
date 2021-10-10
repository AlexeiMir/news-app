import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';
import React from 'react';
import { PostComments } from '../../components/PostComments';

export default function Post() {
  return (
    <MainLayout contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
