import React from 'react';
import { Button } from '@mui/material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { ContainerLeft, ContainerRight, Modal } from './ModalBookStyles';

import CloseModal from '../CloseModal';
import { IBook } from '../../../interfaces/book';
import ModalExtraStudent from './ModalExtraStudent';
import ModalExtraInactive from './ModalExtraInactive';
import { getBookFromID } from '../../../services/GetBookFromID';

interface Iprops {
  livroId: string;
}

const ModalBook: React.FC<Iprops> = ({ livroId }) => {
  const [book, setBook] = React.useState<IBook>();

  React.useEffect(() => {
    if (typeof livroId === 'string') {
      getBookFromID(livroId).then((data) => {
        console.log(data);
        setBook(data);
      });
    }
  }, []);

  return (
    <Modal>
      <div className="modalData">
        <CloseModal onClick={() => console.log('fecha modal')} />
        <div className="dataBookContent">
          <ContainerLeft>
            {book && <img src={book.image} />}
            <Button
              className="btnEmprestarDevolver"
              variant="contained"
              sx={{ backgroundColor: '#FFC501' }}
              color="inherit"
              fullWidth
              startIcon={<AutoStoriesOutlinedIcon />}
            >
              Emprestar
            </Button>

            {/* <Button
              className="btnEmprestarDevolver"
              variant="outlined"
              sx={{ backgroundColor: '#F4F4F4', borderColor: '#ADB5BD' }}
              fullWidth
              startIcon={<AutoStoriesOutlinedIcon />}
            >
              Devolver
            </Button> */}
          </ContainerLeft>

          <ContainerRight>
            {book && (
              <div className="dataBookInfo">
                <h2>{book.tittle}</h2>
                <h3>Sinopse</h3>
                <p>{book.synopsis}</p>
                <h3>Autor</h3>
                <p>{book.author}</p>
                <h3>Gênero</h3>
                <p>{book.genre}</p>
                <h3>Data de Entrada</h3>
                <p>{book.systemEntryDate}</p>
              </div>
            )}
            <div className="dataButtons">
              <Button variant="outlined" className="btnEdit">
                Editar
              </Button>
              <Button variant="outlined" color="error" className="btnEdit">
                Inativar
              </Button>
              {/* <Button
                variant="outlined"
                sx={{ color: '#49D749', borderColor: '#49D749' }}
                className="btnEdit"
              >
                Ativar
              </Button> */}

              <Button
                sx={{ borderColor: ' #ADB5BD ', color: '#000000' }}
                variant="outlined"
                className="btnEdit"
              >
                Histórico
              </Button>
            </div>
          </ContainerRight>
        </div>
        {book && (
          <div className="dataStudent">
            <ModalExtraInactive book={book} />
          </div>
        )}
        {book && (
          <div className="dataStudent">
            <ModalExtraStudent book={book} />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalBook;
