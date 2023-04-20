import { createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IDefaultProviderProps,
  ILoginFormValue,
  IRegisterFormValue,
} from './@types';
import { api } from '../service/api';

interface IUserContext {
  userRegister: (formData: IRegisterFormValue) => Promise<void>;
  userLogin: (formData: ILoginFormValue) => Promise<void>;
  userLogout: () => void;
  autoLogin: () => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValue) => {
    try {
      const response = await api.post('/users', formData);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const userLogin = async (formData: ILoginFormValue) => {
    try {
      const response = await api.post('/login', formData);
      console.log(response.data);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      localStorage.setItem('@USER_ID', response.data.user.id);
      navigate('/shop');
    } catch (error) {
      console.error(error);
    }
  };

  const autoLogin = () => {
    useEffect(() => {
      const token = localStorage.getItem('@TOKEN');
      if (token) {
        navigate('/shop');
      }
    }, []);
  };
  autoLogin();

  const userLogout = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USER_ID');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{ userRegister, userLogin, userLogout, autoLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};
