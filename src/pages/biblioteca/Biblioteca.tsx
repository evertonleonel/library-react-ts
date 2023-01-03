import React, { useState, useEffect } from 'react';
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
  const { openModal, render, objModal, handleModal, bookStatusLend } =
    useModalContext();

  const { state } = useLocation();

  const [books, setBooks] = useState<IBook[]>([]);
  const [selectedBook, setSelectedBook] = useState<IBook>();
  const [loadBooks, setLoadBooks] = useState<IBook[]>();
  const [inputPesquisar, setInputPesquisar] = useState('');
  const [selectFiltro, setSelectFiltro] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [dateSelected, setDateSelected] = useState('');

  const [filterBooks, setFilterBooks] = useState<{
    genre: string;
    systemEntryDate: string;
    searchText: string;
  }>({
    genre: '0',
    systemEntryDate: '',
    searchText: '',
  });

  const [ID, setID] = useState<string>();

  useEffect(() => {
    if (state) {
      setSelectedBook(state.bookEdit);
      openModal();
    }
  }, [state, render]);

  React.useEffect(() => {
    getBooks().then((data) => setBooks(data));

    if (ID) {
      getBookFromID(ID).then((book) => {
        setSelectedBook(book);
      });
    }
  }, [render, bookStatusLend]);

  function getBookSelected(e: React.MouseEvent<HTMLLIElement>) {
    if (typeof e.currentTarget.id === 'string') {
      const idBook = e.currentTarget.id;
      setID(idBook);

      getBookFromID(idBook).then((book) => {
        setSelectedBook(book);
        handleModal('modalBook', 'modalBook');
      });
    }
  }

  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setInputPesquisar(value);
  }

  function inputChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setDateSelected(value);
    const parseDate = value.split('-').reverse().join('/');
    if (parseDate) {
      setInputDate(parseDate);
    }
  }

  const handleFilterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterBooks({ ...filterBooks, [name]: value });
  };

  const handleClickFilter = () => {
    const filteredBooks = books.filter((book) => {
      const genre = filterBooks.genre == '0' || book.genre == filterBooks.genre;
      const searchText =
        !filterBooks.searchText ||
        book.author
          .toLocaleLowerCase()
          .includes(filterBooks.searchText.toLocaleLowerCase()) ||
        book.tittle
          .toLocaleLowerCase()
          .includes(filterBooks.searchText.toLocaleLowerCase());

      const systemEntryDate =
        !filterBooks.systemEntryDate ||
        book.systemEntryDate ==
          new Date(
            filterBooks.systemEntryDate.replaceAll('-', '/')
          ).toLocaleDateString('pt-BR');

      return genre && systemEntryDate && searchText;
    });

    setLoadBooks(filteredBooks);
  };

  function filtroChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSelectFiltro(value);
  }

  const filtrarLivrosPeloInput = async (pesquisa: string) => {
    if (books) {
      const LivrosFiltrados = books.filter(
        (book) =>
          book.tittle.toLowerCase().includes(pesquisa.toLowerCase()) ||
          book.author.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setLoadBooks(LivrosFiltrados);
    }
  };

  function buscarPorGeneroOuData() {
    // filtrarPorGeneroData(inputDate, selectFiltro);
    handleClickFilter();
  }

  function buscarLivrosPorAutorETitulo() {
    filtrarLivrosPeloInput(inputPesquisar);
  }

  function limparCampos() {
    setDateSelected('');
    setSelectFiltro('');
    setFilterBooks({
      genre: '0',
      systemEntryDate: '',
      searchText: '',
    });
  }

  return (
    <BibliotecaContainer>
      <LinkBackHome page="Biblioteca" />
      <BibliotecaBuscar
        handleFilterDate={handleFilterDate}
        filterBooks={filterBooks}
        inputChange={inputChange}
        inputChangeDate={inputChangeDate}
        buscarLivrosPorAutorETitulo={buscarLivrosPorAutorETitulo}
        buscarPorGeneroOuData={buscarPorGeneroOuData}
        filtroChange={filtroChange}
        selectFiltro={selectFiltro}
        dateSelected={dateSelected}
        limparCampos={limparCampos}
      />
      {selectedBook && (
        <>
          {objModal.modalBook && <ModalBook selectedBook={selectedBook} />}
          {objModal.modalLend && <ModalLend selectedBook={selectedBook} />}
          {objModal.modalInactive && (
            <ModalInactive selectedBook={selectedBook} />
          )}
          {objModal.modalHistory && (
            <ModalHistory selectedBook={selectedBook} />
          )}
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
