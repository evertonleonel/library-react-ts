import React, { useEffect } from 'react';
import LinkBackHome from '../../components/linkBackHome/LinkBackHome';

import { BibliotecaContainer } from './BibliotecaStyles';
import BibliotecaBuscar from './BibliotecaBuscar';
import BibliotecaLivros from './BibliotecaLivros';
import { getBooks } from '../../services/GetBooks';
import { IBook } from '../../interfaces/book';

import ModalBook from '../../components/modals/modalBook/ModalBook';
import ModalLend from '../../components/modals/modalLendBook/ModalLend';
import ModalInactive from '../../components/modals/modalInactiveBook/ModalInactive';
import ModalHistory from '../../components/modals/modalHistoryBook/ModalHistory';
import { useModalContext } from '../../hooks/useModalContext';
import { getBookFromID } from '../../services/GetBookFromID';
import { useLocation } from 'react-router-dom';

const Biblioteca: React.FC = () => {
  const {
    modalBook,
    modalLend,
    modalInactive,
    modalHistory,
    openModal,
    render,
  } = useModalContext();

  const { state } = useLocation();

  const [books, setBooks] = React.useState<IBook[]>();
  const [selectedBook, setSelectedBook] = React.useState<IBook>();
  const [loadBooks, setLoadBooks] = React.useState<IBook[]>();
  const [inputPesquisar, setInputPesquisar] = React.useState('');
  const [selectFiltro, setSelectFiltro] = React.useState('');
  const [ID, setID] = React.useState<string>();

  useEffect(() => {
    if (state) {
      setSelectedBook(state.bookEdit);
      openModal();
    }
  }, [state]);

  React.useEffect(() => {
    getBooks().then((data) => setBooks(data));

    if (ID) {
      getBookFromID(ID).then((book) => {
        setSelectedBook(book);
      });
    }
  }, [render]);

  function getBookSelected(e: React.MouseEvent<HTMLLIElement>) {
    if (typeof e.currentTarget.id === 'string') {
      const idBook = e.currentTarget.id;
      setID(idBook);

      getBookFromID(idBook).then((book) => {
        setSelectedBook(book);
        openModal();
      });
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

  const filtrarLivros = async (
    pesquisa: string,
    tipo: 'tittle' | 'author' | 'systemEntryDate' | 'genre'
  ) => {
    if (books) {
      const FilterBooks = books.filter(
        (book) => book[tipo].toLowerCase().indexOf(pesquisa.toLowerCase()) > -1
      );
      setLoadBooks(FilterBooks);
    }
  };

  function buscarLivros() {
    filtrarLivros(
      inputPesquisar,
      selectFiltro as 'tittle' | 'author' | 'systemEntryDate' | 'genre'
    );
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
      {selectedBook && (
        <>
          {modalBook && <ModalBook selectedBook={selectedBook} />}
          {modalLend && <ModalLend selectedBook={selectedBook} />}
          {modalInactive && <ModalInactive selectedBook={selectedBook} />}
          {modalHistory && <ModalHistory selectedBook={selectedBook} />}
        </>
      )}

      {books && (
        <BibliotecaLivros
          books={loadBooks ? loadBooks : books}
          getBookSelected={getBookSelected}
        />
      )}
    </BibliotecaContainer>
  );
};

export default Biblioteca;
