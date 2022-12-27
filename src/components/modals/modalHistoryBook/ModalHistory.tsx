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
  const { toggleModal } = useModalContext();
  const rentHistory = selectedBook.rentHistory;

  const [objFiltrer, setObjFilter] = useState<TObjFilter>({
    student: '',
    classe: '',
    deliveryDate: '',
    withdrawalDate: '',
  });

  //label: usario final, id:atributo do elemento dos dados, filterField: nome do filtro
  const HEAD_TABLE = [
    { label: 'Aluno', id: 'studentName', filterField: 'student' },
    { label: 'Turma', id: 'class', filterField: 'classe' },
    {
      label: 'Data da Retirada',
      id: 'deliveryDate',
      filterField: 'deliveryDate',
    },
    {
      label: 'Data da Entrega',
      id: 'withdrawalDate',
      filterField: 'withdrawalDate',
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

    return studantFilter && classeFilter;
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

  const ss = [
    {
      title: 'Book1',
      rent: [
        {
          student: '',
          classe: '',
          deliveryDate: '',
          withdrawalDate: '',
        },
      ],
    },
    {
      title: 'Book2',
      rent: [
        {
          student: '',
          classe: '',
          deliveryDate: '',
          withdrawalDate: '',
        },
      ],
    },
  ];

  const parseTeste = ss
    .map((el) => {
      return el.rent.map((ren) => {
        return {
          title: el.title,
          student: ren.student,
          classe: ren.classe,
          deliveryDate: ren.deliveryDate,
          withdrawalDate: ren.withdrawalDate,
        };
      });
    })
    .flat();

  return (
    <Overlay>
      <ModalHistoryContainer>
        <CloseModal onClick={() => toggleModal('HistoryClose')} />
        <h2>Histórico de Empréstimo do Livro</h2>
        <div>
          <TableComponent
            HEAD_TABLE={HEAD_TABLE}
            data={filterRentHistory}
            handleFilter={handleFilter}
          />
        </div>
      </ModalHistoryContainer>
    </Overlay>
  );
};

export default ModalHistory;
