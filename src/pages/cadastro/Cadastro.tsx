import LinkBackHome from '../../components/linkBackHome/LinkBackHome';

import CadastroLivro from './CadastroLivro';
import { CadastroContainer, MainContainer } from './CadastroStyles';

const Cadastro = () => {
  return (
    <MainContainer>
      <CadastroContainer>
        <LinkBackHome page="Cadastrar novo Livro" />
        <CadastroLivro />
      </CadastroContainer>
    </MainContainer>
  );
};

export default Cadastro;
