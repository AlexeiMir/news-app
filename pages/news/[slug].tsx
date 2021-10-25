import React from 'react';
import { FullPost } from '../../components/FullPost';
import { PostComments } from '../../components/PostComments';
import MainLayout from '../../layouts/MainLayouts';

export default function Post() {
  return (
    <MainLayout contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
