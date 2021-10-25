import React, { FC } from 'react';
import Portal from '../Portal';
import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode;
}

const FullScreenPopup: FC<IProps> = ({ children }) => {
  return (
    <Portal>
      <div className={styles.popup}>{children}</div>
    </Portal>
  );
};

export default FullScreenPopup;
