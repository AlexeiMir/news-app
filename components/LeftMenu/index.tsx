import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IProps {}

const menu = [
  { text: 'Лента', icon: <FireIcon />, path: '/' },
  { text: 'Сообщения', icon: <MessageIcon />, path: '/' },
  { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/' },
  { text: 'Подписки', icon: <ListIcon />, path: '/' },
];

export const LeftMenu: FC<IProps> = () => {
  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}></li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
