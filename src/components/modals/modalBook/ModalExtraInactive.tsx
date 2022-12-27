import React from 'react';
import { IBook } from '../../../interfaces/book';

interface IPropsBook {
  selectedBook: IBook;
}

const ModalExtraInactive: React.FC<IPropsBook> = ({ selectedBook }) => {
  return (
    <>
      {selectedBook && (
        <div>
          <h2>Informações da Inativação</h2>
          <div className="dataReason">
            <h3>Motivo</h3>
            <p>{selectedBook.status.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalExtraInactive;
