import { Button } from '@material-ui/core';
import React, { FC } from 'react';
import VkIcon from '../../common/SvgIcons/VkIcon';
import GoogleIcon from '../../common/SvgIcons/GoogleIcon';
import EmailIcon from '../../common/SvgIcons/EmailIcon';
import styles from '../styles.module.scss';
import FacebookIcon from '../../common/SvgIcons/FacebookIcon';
import TwitterIcon from '../../common/SvgIcons/TwitterIcon';
import AppleIcon from '../../common/SvgIcons/AppleIcon';

interface IProps {
  onOpenLogin: () => void;
}

const MainForm: FC<IProps> = ({ onOpenLogin }) => {
  return (
    <>
      <div>
        <Button variant="contained" fullWidth>
          <VkIcon />
          ВКонтакте
        </Button>
        <Button variant="contained" fullWidth>
          <GoogleIcon />
          Google
        </Button>
        <Button onClick={onOpenLogin} variant="contained" fullWidth>
          <EmailIcon />
          Через почту
        </Button>
      </div>
      <div className={styles.mini_buttons}>
        <Button>
          <FacebookIcon />
        </Button>
        <Button>
          <TwitterIcon />
        </Button>
        <Button>
          <AppleIcon />
        </Button>
      </div>
    </>
  );
};

export default MainForm;
