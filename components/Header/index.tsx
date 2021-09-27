import React, { FC } from 'react';
import { IconButton, Paper, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';

interface IProps {}

const Header: FC<IProps> = () => (
  <Paper classes={{ root: styles.root }} elevation={0}>
    <div className={styles.search}>
      <IconButton>
        <MenuIcon />
      </IconButton>

      <div className={styles.searchBlock}>
        <FontIcon className={styles.search_icon} name={FontIconName.Search} size="20px" />
        <input placeholder="Поиск" />
      </div>

      <Button variant="contained" className={styles.penButton}>
        Новая запись
      </Button>
    </div>
    <div className={styles.message}>
      <FontIcon name={FontIconName.Bell} size="20px" />
      <FontIcon className={styles.avatar} name={FontIconName.User} size="20px" />
    </div>
  </Paper>
);

export default Header;
