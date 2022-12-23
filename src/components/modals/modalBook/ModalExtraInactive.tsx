import React from 'react';
import { IBook } from '../../../interfaces/book';

interface IPropsBook {
  book: IBook;
}

const ModalExtraInactive: React.FC<IPropsBook> = ({ book }) => {
  return (
    <>
      {book && (
        <div>
          <h2>Informações da Inativação</h2>
          <div className="dataReason">
            <h3>Motivo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalExtraInactive;
