import React, { FC, useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import styles from './styles.module.scss';
import OverlayingPopup from '../common/Modal/OverlayingPopup';
import FontIcon, { FontIconName } from '../FontIcon';
import MainForm from './forms/MainForm';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';

enum AuthForms {
  MainType = 'Main',
  LoginType = 'Login',
  RegisterType = 'Register',
}

interface IProps {
  isOpened: boolean;
  onClose: () => void;
}

const AuthDialog: FC<IProps> = ({ isOpened, onClose }) => {
  const [formType, setFormType] = useState(AuthForms.MainType);

  const handleFormType = useCallback(() => {
    setFormType(AuthForms.RegisterType);
  }, [setFormType]);

  const handleOpenLogin = useCallback(() => {
    setFormType(AuthForms.LoginType);
  }, [setFormType]);

  const handleOpenRegister = useCallback(() => {
    setFormType(AuthForms.RegisterType);
  }, [setFormType]);

  return (
    <OverlayingPopup isOpened={isOpened} onClose={onClose}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          {formType === AuthForms.MainType ? (
            'Вход'
          ) : (
            <Button className={styles.back_title} onClick={handleFormType}>
              <FontIcon name={FontIconName.ArrowLeft} />
            </Button>
          )}
        </h2>
        {formType === AuthForms.MainType && <MainForm onOpenLogin={handleOpenLogin} />}
        {formType === AuthForms.LoginType && <LoginForm onOpenRegister={handleOpenRegister} />}
        {formType === AuthForms.RegisterType && (
          <RegisterForm onOpenLogin={handleOpenLogin} onOpenRegister={handleOpenRegister} />
        )}
      </div>
    </OverlayingPopup>
  );
};

export default AuthDialog;
