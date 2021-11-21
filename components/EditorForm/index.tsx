import React, { FC } from 'react';
import { Button, Input } from '@material-ui/core';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';

const Editor = dynamic(() => import('../common/Editor'), { ssr: false });
console.log('Editor', Editor);

interface IProps {
  title?: string;
}

const EditorForm: FC<IProps> = ({ title }) => (
  <div>
    <Input classes={{ root: styles.titleField }} placeholder="Заголовок" defaultValue={title} />
    <div className={styles.editor}>
      <Editor />
    </div>
    <Button variant="contained" color="primary">
      Publish
    </Button>
  </div>
);

export default EditorForm;
