import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { FC, useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ILoginData } from '../../../utils/api/types';
import { RegisterFormSchema } from '../../../utils/validations';
import FormField from '../../FormField';
import styles from '../styles.module.scss';

interface IProps {
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

const RegisterForm: FC<IProps> = ({ onOpenLogin, onOpenRegister }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = useCallback(
    async (loginData: ILoginData) => {
      try {
        console.log(loginData);
      } catch (e) {
        console.log(e);

        if (e.response) {
          setErrorMessage(e.response.data.message);
        }
      }
    },
    [setErrorMessage],
  );

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="fullName" label="Имя и фамилия" />
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <div className={styles.buttons_register}>
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              onClick={onOpenRegister}
              type="submit"
              color="primary"
              variant="contained">
              Зарегистрироваться
            </Button>
            <Button onClick={onOpenLogin} color="primary" variant="text">
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
