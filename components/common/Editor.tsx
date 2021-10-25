import React, { FC, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';

interface IProps {}

const Editor: FC<IProps> = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Здесь будет ваша статья ..',
    });
    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.log('Error editor', e));
    };
  }, []);
  return <div id="editor" />;
};

export default Editor;
