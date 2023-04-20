import { forwardRef } from 'react';
import { TextFieldProps } from '@mui/material';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

type IInputProps = {
  label: string;
  type: 'text' | 'email' | 'password';
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
} & TextFieldProps;

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, type, error, register }, ref) => (
    <fieldset>
      <StyledTextField label={label} type={type} ref={ref} {...register} />
      {error ? (
        <StyledParagraph fontColor='red'>{error?.message}</StyledParagraph>
      ) : null}
    </fieldset>
  )
);

export default Input;
