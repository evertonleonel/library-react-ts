import React from 'react';
import { IBook } from '../../../interfaces/book';

interface IPropsBook {
  selectedBook: IBook;
}

const ModalExtraStudent: React.FC<IPropsBook> = ({ selectedBook }) => {
  const rentHistory = selectedBook.rentHistory;
  const lastRentHistory = rentHistory[rentHistory.length - 1];

  return (
    <>
      {selectedBook && (
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
              {lastRentHistory && (
                <tr>
                  <th>{lastRentHistory.studentName}</th>
                  <th>{lastRentHistory.class}</th>
                  <th>{lastRentHistory.deliveryDate}</th>
                  <th>{lastRentHistory.withdrawalDate}</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ModalExtraStudent;
