import React from 'react';
import { api } from '../services/Api';
import { userAuth } from '../services/Auth';
import { useNavigate } from 'react-router-dom';
import { Ilogin } from '../pages/login/LoginForm';

interface Iprops {
  children: React.ReactNode;
}

interface IUserContext {
  message: string | null;
  login: boolean;
  error: boolean;
  loading: boolean;
  user: string | null;
  getUser: () => Promise<void>;
  userLogin: (values: Ilogin) => Promise<void>;
  userLogout: () => Promise<void>;
}

export const UserContext = React.createContext({} as IUserContext);

export const UserStorage: React.FC<Iprops> = ({ children }) => {
  const [login, setLogin] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string | null>(null);
  const navigate = useNavigate();

  function timeError() {
    setTimeout(() => {
      setError(false);
    }, 4000);
  }

  async function getUser() {
    const lastUser = window.localStorage.getItem('user');

    if (!lastUser) {
      setLogin(false);
      return;
    } else {
      setUser(lastUser);
      setLogin(true);
      return;
    }
  }

  async function userLogin(values: Ilogin) {
    try {
      setLoading(true);
      await userAuth(values).then((response: Ilogin) => {
        if (response) {
          window.localStorage.setItem('user', values.email);
          getUser();
          setError(false);
          navigate('/');
        } else {
          setError(true);
          timeError();
          setMessage('Email ou senha inválido');
        }
      });
    } catch (err) {
      setError(true);
      if (typeof err === 'string') setMessage(err);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(
    async function () {
      setUser(null);
      setLoading(false);
      setLogin(false);
      navigate('/login');
      window.localStorage.removeItem('user');
    },
    [navigate]
  );

  React.useEffect(() => {
    async function autoLogin() {
      const userEmail = window.localStorage.getItem('user');

      if (userEmail) {
        try {
          setLoading(true);
          const response = await api.get(`/login/?email=${userEmail}`);
          if (response.status !== 200) throw new Error('Token inválido');
          await getUser();
          setLogin(true);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        getUser,
        user,
        error,
        login,
        loading,
        message,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
