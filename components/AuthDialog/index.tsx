import React, { FC, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import OverlayingPopup from '../common/Modal/OverlayingPopup';
import FontIcon, { FontIconName } from '../FontIcon';
import MainForm from './forms/MainForm';
import LoginForm from './forms/LoginForm';
import Register from './forms/Register';

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
            <button className={styles.back_title} onClick={handleFormType}>
              <FontIcon name={FontIconName.ArrowLeft} />
            </button>
          )}
        </h2>
        {formType === AuthForms.MainType && <MainForm onOpenLogin={handleOpenLogin} />}
        {formType === AuthForms.LoginType && <LoginForm onOpenRegister={handleOpenRegister} />}
        {formType === AuthForms.RegisterType && <Register onOpenLogin={handleOpenRegister} />}
      </div>
    </OverlayingPopup>
  );
};

export default AuthDialog;
