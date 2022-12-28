import React from 'react';
import { Button } from '@mui/material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import {
  ContainerLeft,
  ContainerRight,
  ModalBookContainer,
  Overlay,
} from './ModalBookStyles';

import CloseModal from '../CloseModal';
import { IBook } from '../../../interfaces/book';
import ModalExtraStudent from './ModalExtraStudent';
import ModalExtraInactive from './ModalExtraInactive';
import { useModalContext } from '../../../hooks/useModalContext';
import { updateBook } from '../../../services/UpdateBook';
import { useNavigate } from 'react-router-dom';

interface IModalBooks {
  selectedBook: IBook;
}

const ModalBook: React.FC<IModalBooks> = ({ selectedBook }) => {
  const { closeModal, toggleModal, bookStatusLend, returnBook } =
    useModalContext();

  const navigate = useNavigate();

  const rentHistory = selectedBook.rentHistory;
  const lastRentHistory = rentHistory[rentHistory.length - 1];

  async function newStatusBook() {
    const activeBook = {
      ...selectedBook,
      status: {
        description: '',
        isActive: true,
      },
    };

    await updateBook(activeBook);
    toggleModal('render');
  }

  return (
    <Overlay>
      <ModalBookContainer>
        <CloseModal onClick={closeModal} />
        <div className="dataBookContent">
          <ContainerLeft>
            {selectedBook && <img src={selectedBook.image} />}
            {selectedBook.rentHistory && !bookStatusLend && (
              <Button
                onClick={() => {
                  toggleModal('Lend');
                }}
                className="btnEmprestarDevolver"
                variant="contained"
                sx={{ backgroundColor: '#FFC501' }}
                color="inherit"
                startIcon={<AutoStoriesOutlinedIcon />}
                fullWidth
              >
                Emprestar
              </Button>
            )}

            {selectedBook.rentHistory && lastRentHistory && bookStatusLend && (
              <Button
                className="btnEmprestarDevolver"
                onClick={returnBook}
                variant="outlined"
                sx={{ backgroundColor: '#F4F4F4', borderColor: '#ADB5BD' }}
                fullWidth
                startIcon={<AutoStoriesOutlinedIcon />}
              >
                Devolver
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
                <p>{selectedBook.systemEntryDate}</p>
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

              {selectedBook.status.isActive ? (
                <Button
                  onClick={() => toggleModal('Inactive')}
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
                onClick={() => toggleModal('History')}
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
        {selectedBook.rentHistory && lastRentHistory && bookStatusLend && (
          <div className="dataStudent">
            <ModalExtraStudent selectedBook={selectedBook} />
          </div>
        )}
      </ModalBookContainer>
    </Overlay>
  );
};

export default ModalBook;