import React, { FC } from 'react';
import EditorForm from '../components/EditorForm';
import MainLayout from '../layouts/MainLayouts';

interface IProps {}

const MyComponent: FC<IProps> = () => (
  <MainLayout hideComments hideMenu>
    <EditorForm />
  </MainLayout>
);

export default MyComponent;
