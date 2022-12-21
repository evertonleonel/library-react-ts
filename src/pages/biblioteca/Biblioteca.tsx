import React from 'react';
import LinkBackHome from '../../components/linkBackHome/LinkBackHome';

import { BibliotecaContainer } from './BibliotecaStyles';
import BibliotecaBuscar from './BibliotecaBuscar';
import BibliotecaLivros from './BibliotecaLivros';

const Biblioteca: React.FC = () => {
  return (
    <BibliotecaContainer>
      <LinkBackHome page="Biblioteca" />
      <BibliotecaBuscar />
      <BibliotecaLivros />
    </BibliotecaContainer>
  );
};

export default Biblioteca;
