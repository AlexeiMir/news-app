import React, { FC, useState } from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import classNames from 'classnames';
import data from '../../data';
import styles from './styles.module.scss';
import { CommentItem } from './CommentItem';

interface IProps {}

const SideComments: FC<IProps> = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={classNames(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && data.comments.popular.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};

export default SideComments;
