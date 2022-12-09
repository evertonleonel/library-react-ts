import { Button } from '@mui/material';
import { Fragment } from 'react';
import Header from '../../components/header/Header';

const Login = () => {
  return (
    <Fragment>
      <Header userName="Nome do usuário" />
      <div>
        <Button variant="outlined" color="primary">
          Salve
        </Button>
      </div>
    </Fragment>
  );
};

export default Login;
