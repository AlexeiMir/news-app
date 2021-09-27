import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

export enum FontIconName {
  Search = 'icon-search',
  Clock = 'icon-clock',
  Bell = 'icon-bell',
  User = 'icon-user-outline',
}

interface IProps {
  className?: string;
  name: string;
  size?: string;
}

export const FontIcon: FC<IProps> = ({ className, name, size }) => (
  <div className={styles.font}>
    <i className={classnames(className, name)} style={{ fontSize: `${size}` }} />
  </div>
);

export default FontIcon;
