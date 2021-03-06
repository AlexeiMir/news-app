import React, { FC, useState, useCallback } from 'react';
import Alert from '@material-ui/lab/Alert';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import { LoginFormSchema } from '../../../utils/validations';
import { ILoginData } from '../../../utils/api/types';
import FormField from '../../FormField';
import styles from '../styles.module.scss';

interface IProps {
  onOpenRegister: () => void;
}

const LoginForm: FC<IProps> = ({ onOpenRegister }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
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
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пaроль" />
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <div className={styles.buttons_login}>
            <Button
              disabled={!form.formState.isValid || !form.formState.isSubmitting}
              type="submit"
              color="primary"
              variant="contained">
              Войти
            </Button>
            <Button onClick={onOpenRegister} color="primary" variant="text">
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
