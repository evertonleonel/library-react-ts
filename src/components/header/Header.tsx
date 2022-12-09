import React from 'react';
import Logo from '../../assets/logo.svg';
import Lupa from '../../assets/lupa.svg';

const Header = () => {
  return (
    <header>
      <img src={Logo}></img>
      <img src={Lupa}></img>
      <div></div>
    </header>
  );
};

export default Header;
