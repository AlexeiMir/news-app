import React, { FC } from 'react';
import { LoginFormSchema } from '../../../utils/validations';

interface IProps {
  onOpenRegister: () => void;
}

const LoginForm: FC<IProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });
  return <form></form>;
};

export default LoginForm;
