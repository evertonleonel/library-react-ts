import { ChangeEvent, useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FiltroSVG from '../../assets/filtroEmprestimo.svg';
import InputFilter from '../inputFilter/InputFilter';

export type THeadTable = {
  label: string;
  id: string;
  filterField: string | null;
  filterType: string | null;
};

interface IProps {
  HEAD_TABLE: THeadTable[];
  maxHeight?: number;
  maxWidth?: string;
  data: any[];
  handleFilter: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const TableComponent = ({
  HEAD_TABLE,
  data,
  maxHeight,
  maxWidth,
  handleFilter,
}: IProps) => {
  const [parseData, setParseData] = useState<any[]>();

  useEffect(() => {
    if (data) {
      const dataParsing = data.map((element) => {
        return {
          ...element,
          deliveryDate: new Date(element.deliveryDate).toLocaleDateString(),
          withdrawalDate: new Date(element.withdrawalDate).toLocaleDateString(),
        };
      });
      setParseData(dataParsing);
    }
  }, [data]);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: { maxHeight }, maxWidth: { maxWidth } }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {/* renderiza o cabeçalho a partir da label */}
              {HEAD_TABLE.map(({ label, id }) => {
                return <TableCell key={id}>{label}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {/* rendereiza os campos de filtros a partir do filterField */}
              {HEAD_TABLE.map(({ filterField, filterType, id }) => {
                return (
                  <TableCell key={id}>
                    {filterField && (
                      <InputFilter
                        className="search"
                        src={FiltroSVG}
                        id={filterField}
                        name={filterField}
                        onChange={handleFilter}
                        type={filterType}
                      />
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
            {/* redenriza as linhas  */}
            {parseData &&
              parseData.map((element, index) => {
                return (
                  <TableRow key={index}>
                    {/* redenriza as colunas, atraves da quandtidade de elementos do headTable, pegando o id como atributo chave do elemento */}
                    {HEAD_TABLE.map(({ id }) => {
                      return (
                        <TableCell key={id}>
                          {element[id as keyof typeof element]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
