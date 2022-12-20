import React from 'react';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import HttpsTwoToneIcon from '@mui/icons-material/HttpsTwoTone';

import Logo from '../../assets/logo.svg';
import { LoginContainer, LoginLogo } from './LoginStyles';

import { useFormik } from 'formik';
import UserContext from '../../context/UserContext';
import { validationSchema, initialValues } from './validate';

export interface Ilogin {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { userLogin, error, message, loading } = React.useContext(UserContext);

  const [showError, setShowError] = React.useState(false);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values: Ilogin) {
      try {
        userLogin(values);
        setShowError(false);
      } catch (err) {
        setShowError(true);
      }
    },
  });

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setShowError(true);
    handleSubmit(e);
  };

  return (
    <>
      <LoginContainer>
        <LoginLogo src={Logo} alt="Logo login" />

        <form onSubmit={formSubmit}>
          <TextField
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            variant="outlined"
            label="E-mail"
            error={showError ? true : false}
            helperText={showError && errors.email}
            sx={{
              backgroundColor: '#f1f2f3',
              borderRadius: '4px',
              '& fieldset': { border: 'none' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MailTwoToneIcon sx={{ fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            label="Senha"
            variant="outlined"
            error={showError ? true : false}
            helperText={showError && errors.password}
            sx={{
              backgroundColor: '#f1f2f3',
              borderRadius: '4px',
              '& fieldset': { border: 'none' },
              helperText: { fontSize: '20px' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <HttpsTwoToneIcon sx={{ fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          {error && (
            <Alert variant="outlined" severity="error">
              {message}
            </Alert>
          )}

          <div className="EsqueciSenha">
            <p>Esqueci minha senha</p>
          </div>

          <div className="LoginButton">
            {loading ? (
              <Button
                className="buttonSubmit  buttonDisabled"
                variant="contained"
                type="submit"
                size="large"
                fullWidth
                disabled
              >
                Carregando...
              </Button>
            ) : (
              <Button
                className="buttonSubmit "
                variant="contained"
                type="submit"
                size="large"
                fullWidth
              >
                Entrar
              </Button>
            )}
          </div>
        </form>
      </LoginContainer>
    </>
  );
};

export default LoginForm;
