import React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import HttpsTwoToneIcon from '@mui/icons-material/HttpsTwoTone';
import Logo from '../../assets/logo.svg';
import { LoginContainer, LoginLogo } from './LoginStyles';
import { useFormik } from 'formik';
import { userAuth } from '../../services/Auth';
import InputError from '../../components/forms/InputError';
import { validateSchema } from '../../components/context/validate';
import { useNavigate } from 'react-router-dom';

export interface Ilogin {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const [showError, setShowError] = React.useState(false);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validateSchema,
    onSubmit(values: Ilogin) {
      const logar = userAuth(values);
      logar.then((response) => {
        if (response) {
          navigate('/');
        } else {
          setShowError(true);
          errors.email = 'E-mail ou senha inválido';
          errors.password = 'E-mail ou senha inválido';
        }
      });
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
          {showError && <InputError erro={errors.email || null} />}

          <TextField
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            label="Senha"
            variant="outlined"
            sx={{
              backgroundColor: '#f1f2f3',
              borderRadius: '4px',
              '& fieldset': { border: 'none' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <HttpsTwoToneIcon sx={{ fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          {showError && <InputError erro={errors.password || null} />}
          <div className="EsqueciSenha">
            <p>Esqueci minha senha</p>
          </div>

          <div className="LoginButton">
            <Button
              className="buttonSubmit"
              variant="contained"
              type="submit"
              size="large"
              fullWidth
            >
              Entrar
            </Button>
          </div>
        </form>
      </LoginContainer>
    </>
  );
};

export default LoginForm;
