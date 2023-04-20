import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../context/UserContext';
import { IRegisterFormValue } from '../../../context/@types';

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<IRegisterFormValue>();

  const submit: SubmitHandler<IRegisterFormValue> = (formData) => {
    userRegister(formData);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input label='Nome' type='text' register={register('name')} />
      <Input label='Email' type='email' register={register('email')} />
      <Input label='Senha' type='password' register={register('password')} />
      <Input label='Repita a senha' type='password' />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
