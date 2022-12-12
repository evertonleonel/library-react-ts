import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { LoginContainer, LoginLogo } from './LoginStyles';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import HttpsTwoToneIcon from '@mui/icons-material/HttpsTwoTone';
import Logo from '../../assets/logo.svg';

const LoginForm = () => {
  return (
    <>
      <LoginContainer>
        <LoginLogo src={Logo} alt="Logo login" />

        <form>
          <TextField
            sx={{
              backgroundColor: '#f1f2f3',
              borderRadius: '4px',
              '& fieldset': { border: 'none' },
            }}
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MailTwoToneIcon sx={{ fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            sx={{
              backgroundColor: '#f1f2f3',
              borderRadius: '4px',
              '& fieldset': { border: 'none' },
            }}
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <HttpsTwoToneIcon sx={{ fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
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
