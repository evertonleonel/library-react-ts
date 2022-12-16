import Logo from '../../assets/logo.svg';
import IconeUsuario from '../../assets/icone_usuario.svg';
import Seta from '../../Assets/seta.svg';
import React, { useState } from 'react';
import { HeaderContainer, HeaderLogo, HeaderUsuario } from './HeaderStyles';
import { Menu, MenuItem } from '@mui/material';
import UserContext from '../../context/UserContext';
import { Outlet, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { user, userLogout } = React.useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    userLogout();
  };

  return (
    <>
      <HeaderContainer>
        <HeaderLogo
          onClick={() => {
            navigate('/home');
          }}
        >
          <img src={Logo} />
        </HeaderLogo>

        <HeaderUsuario>
          <img src={IconeUsuario} alt="Icone Usuário: abrir opções" />
          {user ? <p>{user}</p> : <p>Usuário</p>}

          <img
            src={Seta}
            alt="Icone seta: abrir opções"
            onClick={handleClick}
          />
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem
              onClick={handleLogout}
              style={{ width: '110px', marginTop: '5px', fontSize: '18px' }}
            >
              Sair
            </MenuItem>
          </Menu>
        </HeaderUsuario>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
