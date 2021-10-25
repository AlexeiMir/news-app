import React, { FC } from 'react';
import cx from 'classnames';
import OverlayingPopup from '../OverlayingPopup';
import styles from './styles.module.scss';
import HeaderModal from '../HeaderModal';

interface IProps {
  onClose: () => void;
  onPrevArrowClick: () => void;
  isOpened: boolean;
  classNames: string;
  title: string;
  children?: React.ReactNode;
}

const MainPopup: FC<IProps> = ({ children, onClose, isOpened, classNames, onPrevArrowClick, title }) => (
  <OverlayingPopup isOpened={isOpened} onClose={onClose}>
    <div className={cx(styles.container, classNames)}>
      <HeaderModal onPrevArrowClick={onPrevArrowClick} title={title} onClose={onClose} />
      {children}
    </div>
  </OverlayingPopup>
);

export default MainPopup;
