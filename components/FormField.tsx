import { TextField } from '@material-ui/core';
import React, { FC } from 'react';

interface IProps {
  name: string;
  label: string;
}

const FormField: FC<IProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();
  return (
    <TextField
      {...register(name)}
      name={name}
      size="small"
      label={label}
      variant="outlined"
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
      fullWidth
    />
  );
};

export default FormField;
