import { Button, Input } from '@material-ui/core';
import React, { ChangeEvent, FC, useState } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const AddCommentForm: FC<IProps> = () => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState('');

  const onAddComment = () => {
    setClicked(false);
    setText('');
  };

  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.form}>
      <Input
        value={text}
        classes={{ root: styles.fieldRoot }}
        onChange={onChangeComment}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button className={styles.addButton} variant="contained" color="primary" onClick={onAddComment}>
          Add comment
        </Button>
      )}
    </div>
  );
};

export default AddCommentForm;
