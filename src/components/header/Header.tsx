import Logo from '../../assets/logo.svg';
import IconeUsuario from '../../assets/icone_usuario.svg';
import Seta from '../../Assets/seta.svg';
import { useState } from 'react';
import { HeaderContainer, HeaderLogo, HeaderUsuario } from './HeaderStyles';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IProps {
  userName: string;
}

const Header = ({ userName }: IProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <HeaderLogo>
        <img src={Logo} />
      </HeaderLogo>

      <HeaderUsuario>
        <img src={IconeUsuario} alt="Icone Usuário: abrir opções" />
        <p>Usuário</p>
        <img src={Seta} alt="Icone seta: abrir opções" onClick={handleClick} />
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem
            onClick={handleClose}
            style={{ width: '110px', marginTop: '5px', fontSize: '18px' }}
          >
            Sair
          </MenuItem>
        </Menu>
      </HeaderUsuario>
    </HeaderContainer>
  );
};

export default Header;
