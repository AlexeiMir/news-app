import type { NextPage } from 'next';
import React from 'react';
import { Post } from '../components/Post';
import MainLayout from '../layouts/MainLayouts';
import { generateKey } from '../utils/calendarUtils';

const Home: NextPage = () => (
  <MainLayout>
    {Array(5)
      .fill(generateKey())
      .map((item) => (
        <div key={item}>
          <Post />
        </div>
      ))}
  </MainLayout>
);

export default Home;
