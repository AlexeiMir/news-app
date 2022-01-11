import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Wrong email').required('Email required'),
  password: yup.string().min(6, 'Password must have unless 6 symbols'),
});

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().required('Surname and name required'),
  })
  .concat(LoginFormSchema);
