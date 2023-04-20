import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ILoginFormValue } from '../../../context/@types';
import { UserContext } from '../../../context/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const schema = yup
    .object({
      email: yup.string().required('Email é um campo obrigatório!'),
      password: yup.string().required('Senha é um campo obrigatório!'),
    })
    .required();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<ILoginFormValue>({ resolver: yupResolver(schema) });
  const submit: SubmitHandler<ILoginFormValue> = (formData) => {
    userLogin(formData);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input label='Email' type='email' register={register('email')} />
      <Input label='Senha' type='password' register={register('password')} />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};
export default LoginForm;
