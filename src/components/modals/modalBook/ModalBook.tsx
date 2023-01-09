import React, { useState } from 'react';
import { Button } from '@mui/material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import {
  ContainerLeft,
  ContainerRight,
  ModalBookContainer,
  Overlay,
} from './ModalBookStyles';

import CloseModal from '../CloseModal';
import { IBook, IRentHistory } from '../../../interfaces/book';
import ModalExtraStudent from './ModalExtraStudent';
import ModalExtraInactive from './ModalExtraInactive';
import { useModalContext } from '../../../hooks/useModalContext';
import { updateBook } from '../../../services/UpdateBook';
import { useNavigate } from 'react-router-dom';

interface IModalBooks {
  selectedBook: IBook;
  handleUpdate: () => void;
}

const ModalBook: React.FC<IModalBooks> = ({ selectedBook, handleUpdate }) => {
  const navigate = useNavigate();
  const { handleModal, bookStatusLend, returnBook } = useModalContext();

  const rentHistory = selectedBook.rentHistory;
  const lastHistory = rentHistory[rentHistory.length - 1];
  const statusBook = selectedBook.status.isActive;

  const [lastRentHistory, setLastRentHistory] =
    useState<IRentHistory>(lastHistory);

  async function newStatusBook() {
    const activeBook = {
      ...selectedBook,
      status: {
        description: '',
        isActive: true,
      },
    };

    await updateBook(activeBook);
    handleUpdate();
  }

  const devolverLivro = async () => {
    const index = rentHistory.length - 1;

    const dataAtual = new Date().toISOString();

    setLastRentHistory({
      ...lastRentHistory,
      withdrawalDate: dataAtual,
    });

    rentHistory.splice(index, 1, {
      ...lastRentHistory,
      withdrawalDate: dataAtual,
    });

    const updateRentBook: IBook = {
      ...selectedBook,
      rentHistory: rentHistory,
    };

    returnBook();

    await updateBook(updateRentBook);
    handleUpdate();
  };

  return (
    <Overlay>
      <ModalBookContainer>
        <CloseModal onClick={() => handleModal('modalBook')} />
        <div className="dataBookContent">
          <ContainerLeft>
            {selectedBook && <img src={selectedBook.image} />}

            {bookStatusLend ? (
              <Button
                className="btnEmprestarDevolver"
                onClick={devolverLivro}
                variant="outlined"
                sx={{ backgroundColor: '#F4F4F4', borderColor: '#ADB5BD' }}
                fullWidth
                startIcon={<AutoStoriesOutlinedIcon />}
              >
                Devolver
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleModal('modalBook', 'modalLend');
                }}
                className="btnEmprestarDevolver"
                variant="contained"
                sx={{ backgroundColor: '#FFC501' }}
                color="inherit"
                startIcon={<AutoStoriesOutlinedIcon />}
                fullWidth
                disabled={!selectedBook.status.isActive}
              >
                Emprestar
              </Button>
            )}
          </ContainerLeft>

          <ContainerRight>
            {selectedBook && (
              <div className="dataBookInfo">
                <h2>{selectedBook.tittle}</h2>
                <h3>Sinopse</h3>
                <p>{selectedBook.synopsis}</p>
                <h3>Autor</h3>
                <p>{selectedBook.author}</p>
                <h3>Gênero</h3>
                <p>{selectedBook.genre}</p>
                <h3>Data de Entrada</h3>
                <p>
                  {new Date(selectedBook.systemEntryDate).toLocaleDateString(
                    'pt-BR'
                  )}
                </p>
              </div>
            )}
            <div className="dataButtons">
              <Button
                variant="outlined"
                className="btnEdit"
                onClick={() =>
                  navigate('/cadastro', {
                    state: {
                      bookEdit: selectedBook,
                    },
                  })
                }
              >
                Editar
              </Button>

              {statusBook ? (
                <Button
                  onClick={() => handleModal('modalBook', 'modalInactive')}
                  variant="outlined"
                  color="error"
                  className="btnEdit"
                >
                  Inativar
                </Button>
              ) : (
                <Button
                  onClick={newStatusBook}
                  variant="outlined"
                  sx={{ color: '#49D749', borderColor: '#49D749' }}
                  className="btnEdit"
                >
                  Ativar
                </Button>
              )}

              <Button
                onClick={() => handleModal('modalBook', 'modalHistory')}
                sx={{ borderColor: ' #ADB5BD ', color: '#000000' }}
                variant="outlined"
                className="btnEdit"
              >
                Histórico
              </Button>
            </div>
          </ContainerRight>
        </div>
        {selectedBook && !selectedBook.status.isActive && (
          <div className="dataStudent">
            <ModalExtraInactive selectedBook={selectedBook} />
          </div>
        )}
        {bookStatusLend && (
          <div className="dataStudent">
            <ModalExtraStudent selectedBook={selectedBook} />
          </div>
        )}
      </ModalBookContainer>
    </Overlay>
  );
};

export default ModalBook;
