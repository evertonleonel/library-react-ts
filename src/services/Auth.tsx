import axios from 'axios';
import { Ilogin } from '../pages/login/LoginForm';
import { GET_LOGINS } from './Api';

export const userAuth = async (values: Ilogin) => {
  try {
    const response = await axios.get(GET_LOGINS);

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
