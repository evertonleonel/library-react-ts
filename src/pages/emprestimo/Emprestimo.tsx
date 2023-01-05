import React, { useState, useEffect, ChangeEvent } from 'react';
import LinkBackHome from '../../components/linkBackHome/LinkBackHome';
import { TableComponent } from '../../components/tableComponent/TableComponent';
import { IBook } from '../../interfaces/book';

import { getHistorys } from '../../services/GetHistoryBooks';
import { EmprestimoContainer } from './EmprestimoStyles';
import { TabelaContainer } from './EmprestimoStyles';

interface IParseBooks {
  tittle: string;
  studentName: string;
  class: string;
  deliveryDate: string;
  withdrawalDate: string;
}

export type TObjFilter = {
  tittle: string;
  student: string;
  classe: string;
  deliveryDate: string;
  withdrawalDate: string;
};

const Emprestimo = () => {
  const [historyBooks, setHistoryBooks] = useState<IBook[]>();
  const [booksParse, setBooksParse] = useState<IParseBooks[]>([]);

  useEffect(() => {
    getHistorys().then((data) => {
      setHistoryBooks(data);
    });

    parsing();
  }, [historyBooks]);

  const parsing = () => {
    if (typeof historyBooks !== 'undefined') {
      const parseBooks = historyBooks
        ?.map((element) => {
          return element.rentHistory.map((ren) => {
            return {
              tittle: element.tittle,
              studentName: ren.studentName,
              class: ren.class,
              deliveryDate: ren.deliveryDate,
              withdrawalDate: ren.withdrawalDate,
            };
          });
        })
        .flat();

      if (typeof parseBooks !== 'undefined') {
        setBooksParse(parseBooks);
      }
    }
  };

  const [objFiltrer, setObjFilter] = useState<TObjFilter>({
    tittle: '',
    student: '',
    classe: '',
    deliveryDate: '',
    withdrawalDate: '',
  });

  const HEAD_TABLE = [
    {
      label: 'Aluno',
      id: 'studentName',
      filterField: 'student',
      filterType: 'text',
    },
    { label: 'Turma', id: 'class', filterField: 'classe', filterType: 'text' },
    { label: 'Livro', id: 'tittle', filterField: 'tittle', filterType: 'text' },
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

  const filterRentHistory = booksParse.filter((history) => {
    const tittleFilter =
      !objFiltrer.tittle ||
      history.tittle.toLowerCase().includes(objFiltrer.tittle.toLowerCase());

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
      tittleFilter &&
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
    setObjFilter((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <EmprestimoContainer>
      <LinkBackHome page="Histórico de Empréstimos" />
      <TabelaContainer>
        <TableComponent
          HEAD_TABLE={HEAD_TABLE}
          data={filterRentHistory}
          handleFilter={handleFilter}
        />
      </TabelaContainer>
    </EmprestimoContainer>
  );
};

export default Emprestimo;
