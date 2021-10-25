import React, { FC } from 'react';
import styles from './styles.module.scss';
import FontIcon, { FontIconName } from '../../../FontIcon';

interface IProps {
  onClose: () => void;
  onPrevArrowClick: () => void;
  title: string;
}

const HeaderModal: FC<IProps> = ({ onPrevArrowClick, onClose, title }) => (
  <div className={styles.header}>
    <button type="button" onClick={onPrevArrowClick}>
      <FontIcon name={FontIconName.Clock} />
    </button>
    <div className={styles.title}>{title}</div>
    <button type="button" onClick={onClose}>
      <FontIcon name={FontIconName.Clock} />
    </button>
  </div>
);

export default HeaderModal;
