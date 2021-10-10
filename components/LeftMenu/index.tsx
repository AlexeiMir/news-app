import { Button } from '@material-ui/core';
import React, { FC } from 'react';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';

interface IProps {}

const menu = [
  { text: 'Лента', icon: <FontIcon className={styles.menuBtn} name={FontIconName.Fire} size="20px" />, path: '/' },
  { text: 'Сообщения', icon: <FontIcon className={styles.menuBtn} name={FontIconName.Mail} size="20px" />, path: '/' },
  {
    text: 'Рейтинг RJ',
    icon: <FontIcon className={styles.menuBtn} name={FontIconName.Rating} size="20px" />,
    path: '/',
  },
  { text: 'Подписки', icon: <FontIcon className={styles.menuBtn} name={FontIconName.List} size="20px" />, path: '/' },
];

const LeftMenu: FC<IProps> = () => (
  <div className={styles.menu}>
    <ul>
      {menu.map((obj) => (
        <li key={obj.path}>
          <Button>
            {obj.text}
            {obj.icon}
          </Button>
        </li>
      ))}
    </ul>
  </div>
);

export default LeftMenu;
