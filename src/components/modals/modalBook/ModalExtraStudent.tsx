import React from 'react';
import { IBook } from '../../../interfaces/book';

interface IPropsBook {
  book: IBook;
}

const ModalExtraStudent: React.FC<IPropsBook> = ({ book }) => {
  return (
    <>
      {book && (
        <div className="dataExtraReason">
          <h2>Dados do Aluno</h2>

          <table className="dataReason">
            <thead>
              <tr>
                <th>Nome do aluno</th>
                <th>Turma</th>
                <th>Data da retirada</th>
                <th>Data de entrega</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>studentName</th>
                <th>class</th>
                <th>withdrawalDate</th>
                <th>deliveryDate</th>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ModalExtraStudent;
