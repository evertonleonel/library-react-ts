import { useLocation } from 'react-router-dom';
import LinkBackHome from '../../components/linkBackHome/LinkBackHome';

import CadastroLivro from './CadastroLivro';
import { CadastroContainer, MainContainer } from './CadastroStyles';

const Cadastro = () => {
  const { state } = useLocation();

  const titlePage = state?.bookEdit ? 'Editar Livro' : 'Cadastrar novo Livro';
  return (
    <MainContainer>
      <CadastroContainer>
        <LinkBackHome page={titlePage} />
        <CadastroLivro />
      </CadastroContainer>
    </MainContainer>
  );
};

export default Cadastro;
