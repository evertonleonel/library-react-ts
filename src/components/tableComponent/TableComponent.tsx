import { ChangeEvent } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import FiltroSVG from '../../assets/filtroEmprestimo.svg';

export type THeadTable = {
  label: string;
  id: string;
  filterField: string | null;
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
              {HEAD_TABLE.map(({ filterField, id }) => {
                return (
                  <TableCell key={id}>
                    {filterField && (
                      <div className="search">
                        <img src={FiltroSVG} />
                        <InputBase
                          id={filterField}
                          name={filterField}
                          onChange={handleFilter}
                        />
                      </div>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
            {/* redenriza as linhas  */}
            {data.map((element, index) => {
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
