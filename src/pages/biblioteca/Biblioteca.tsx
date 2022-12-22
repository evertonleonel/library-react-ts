import React from 'react';
import LinkBackHome from '../../components/linkBackHome/LinkBackHome';

import { BibliotecaContainer } from './BibliotecaStyles';
import BibliotecaBuscar from './BibliotecaBuscar';
import BibliotecaLivros from './BibliotecaLivros';
import { getBooks } from '../../services/GetBooks';
import { IBook } from '../../interfaces/book';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import ModalBook from '../../components/modals/modalBook/ModalBook';

const Biblioteca: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const OpenModal = () => setOpen(true);
  const CloseModal = () => setOpen(false);

  const [books, setBooks] = React.useState<IBook[]>();
  const [loadBooks, setLoadBooks] = React.useState<IBook[]>();
  const [inputPesquisar, setInputPesquisar] = React.useState('');
  const [selectFiltro, setSelectFiltro] = React.useState('');
  const [livroId, setLivroId] = React.useState('');

  React.useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);

  function getIDLivro(e: React.MouseEvent<HTMLLIElement>) {
    if (typeof e.currentTarget.id === 'string') {
      setLivroId(e.currentTarget.id);
      OpenModal();
    }
  }

  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setInputPesquisar(value);
  }

  function filtroChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSelectFiltro(value);
  }

  const filtrarLivros = async (pesquisa: string, tipo: string) => {
    if (books) {
      console.log(books);
      const FilterBooks = books.filter(
        (book) => book[tipo].toLowerCase().indexOf(pesquisa.toLowerCase()) > -1
      );
      setLoadBooks(FilterBooks);
    }
  };

  function buscarLivros() {
    filtrarLivros(inputPesquisar, selectFiltro);
  }

  return (
    <BibliotecaContainer>
      <LinkBackHome page="Biblioteca" />
      <BibliotecaBuscar
        inputChange={inputChange}
        buscarLivros={buscarLivros}
        filtroChange={filtroChange}
        selectFiltro={selectFiltro}
      />

      <Modal open={open} onClose={CloseModal}>
        <>
          <ModalBook livroId={livroId} />
        </>
      </Modal>

      {books && (
        <BibliotecaLivros
          books={loadBooks ? loadBooks : books}
          getIDLivro={getIDLivro}
        />
      )}
    </BibliotecaContainer>
  );
};

export default Biblioteca;
