import { api } from './Api';
import { Ilogin } from '../pages/login/LoginForm';

export const userAuth = async (values: Ilogin) => {
  try {
    const response = await api.get('login');

    if (response && response.status === 200) {
      const logins = response.data;

      const found = logins.find((login: Ilogin) => {
        return (
          login.email === values.email && login.password === values.password
        );
      });
      if (found) {
        return found;
      } else {
        return false;
      }
    }
  } catch (error) {
    Promise.reject(error);
  }
};
