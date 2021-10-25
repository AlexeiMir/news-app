import React, { FC } from 'react';
import Portal from '../Portal';
import styles from './styles.module.scss';

interface IProps {
  onClose: () => void;
  isOpened: boolean;
  children?: React.ReactNode;
}

const OverlayingPopup: FC<IProps> = ({ children, onClose, isOpened }) => {
  if (!isOpened) {
    return null;
  }
  return (
    <Portal>
      <div className={styles.container} role="dialog">
        <div className={styles.overlay} role="button" tabIndex={0} onClick={onClose} />
        {children}
      </div>
    </Portal>
  );
};

export default OverlayingPopup;
