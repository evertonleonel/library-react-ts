import React, { ChangeEvent, useState } from 'react';
import { Overlay } from '../modalBook/ModalBookStyles';
import { ModalHistoryContainer } from './ModalHistoryStyles';

import { useModalContext } from '../../../hooks/useModalContext';
import { IBook } from '../../../interfaces/book';
import { TableComponent } from '../../tableComponent/TableComponent';
import CloseModal from '../CloseModal';

interface IModalHistory {
  selectedBook: IBook;
}

type TObjFilter = {
  student: string;
  classe: string;
  deliveryDate: string;
  withdrawalDate: string;
};

const ModalHistory: React.FC<IModalHistory> = ({ selectedBook }) => {
  const { handleModal } = useModalContext();
  const rentHistory = selectedBook.rentHistory;

  const [objFiltrer, setObjFilter] = useState<TObjFilter>({
    student: '',
    classe: '',
    deliveryDate: '',
    withdrawalDate: '',
  });

  //label: usario final, id:atributo do elemento dos dados, filterField: nome do filtro
  const HEAD_TABLE = [
    {
      label: 'Aluno',
      id: 'studentName',
      filterField: 'student',
      filterType: 'text',
    },
    { label: 'Turma', id: 'class', filterField: 'classe', filterType: 'text' },
    {
      label: 'Data da Retirada',
      id: 'deliveryDate',
      filterField: 'deliveryDate',
      filterType: 'date',
    },
    {
      label: 'Data da Entrega',
      id: 'withdrawalDate',
      filterField: 'withdrawalDate',
      filterType: 'date',
    },
  ];

  const filterRentHistory = rentHistory.filter((history) => {
    const studantFilter =
      !objFiltrer.student ||
      history.studentName
        .toLowerCase()
        .includes(objFiltrer.student.toLowerCase());

    const classeFilter =
      !objFiltrer.classe ||
      history.class.toLowerCase().includes(objFiltrer.classe.toLowerCase());

    const deliveryDateFilter =
      !objFiltrer.deliveryDate ||
      history.deliveryDate
        .toLowerCase()
        .includes(objFiltrer.deliveryDate.toLowerCase());

    const withdrawalDateFilter =
      !objFiltrer.withdrawalDate ||
      history.withdrawalDate
        .toLowerCase()
        .includes(objFiltrer.withdrawalDate.toLowerCase());

    return (
      studantFilter &&
      classeFilter &&
      deliveryDateFilter &&
      withdrawalDateFilter
    );
  });

  const handleFilter = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // copia do  objeto, e adiciona valor ao atributo correspondente ao name
    setObjFilter((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Overlay>
      <ModalHistoryContainer>
        <CloseModal onClick={() => handleModal('modalHistory', 'modalBook')} />
        <h2>Histórico de Empréstimo do Livro</h2>
        <div>
          <TableComponent
            HEAD_TABLE={HEAD_TABLE}
            data={filterRentHistory}
            handleFilter={handleFilter}
            maxWidth={'978px'}
            maxHeight={400}
          />
        </div>
      </ModalHistoryContainer>
    </Overlay>
  );
};

export default ModalHistory;
