import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LoginContainer, LoginLogo } from './LoginStyles';
import Logo from '../../assets/logo.svg';

const LoginForm = () => {
  return (
    <>
      <LoginContainer>
        <LoginLogo src={Logo} alt="Logo login" />

        <form>
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
        </form>
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
      </LoginContainer>
    </>
  );
};

export default LoginForm;
