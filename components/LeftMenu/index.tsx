import { Button } from '@material-ui/core';
import Link from 'next/link';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';

interface IProps {}

const menu = [
  { text: 'Лента', icon: <FontIcon className={styles.menuBtn} name={FontIconName.Fire} size="20px" />, path: '/' },
  {
    text: 'Сообщения',
    icon: <FontIcon className={styles.menuBtn} name={FontIconName.Mail} size="20px" />,
    path: '/messages',
  },
  {
    text: 'Рейтинг RJ',
    icon: <FontIcon className={styles.menuBtn} name={FontIconName.Rating} size="20px" />,
    path: '/rating',
  },
  {
    text: 'Подписки',
    icon: <FontIcon className={styles.menuBtn} name={FontIconName.List} size="20px" />,
    path: '/follows',
  },
];

const LeftMenu: FC<IProps> = () => {
  const router = useRouter();
  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <a>
                <Button variant={router.asPath === obj.path ? 'contained' : 'text'}>
                  {obj.text}
                  {obj.icon}
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
