import type { NextPage } from 'next';
import React from 'react';
import { CustomButton } from 'aleksmir-ui-kit';
import MainLayout from '../../layouts/MainLayouts';

const Profile: NextPage = () => (
  <MainLayout>
    <CustomButton color="primary">Custom</CustomButton>
  </MainLayout>
);

export default Profile;
