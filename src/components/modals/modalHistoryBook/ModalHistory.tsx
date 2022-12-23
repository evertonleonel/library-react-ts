import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputBase from '@mui/material/InputBase';
import FiltroSVG from '../../../assets/filtroEmprestimo.svg';
import { Modal } from '../modalBook/ModalBookStyles';
import { ModalHistoryContainer } from './ModalHistoryStyles';

import CloseModal from '../CloseModal';

const ModalHistory: React.FC = () => {
  return (
    <Modal>
      <ModalHistoryContainer>
        <CloseModal onClick={() => console.log('salve')} />
        <h2>Histórico de Empréstimo do Livro</h2>
        <div>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 400, maxWidth: '978px' }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Aluno</TableCell>
                    <TableCell>Turma</TableCell>
                    <TableCell>Data da Retirada</TableCell>
                    <TableCell>Data da Entrega</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="search">
                        <img src={FiltroSVG} />
                        <InputBase />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="search">
                        <img src={FiltroSVG} />
                        <InputBase />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="search">
                        <img src={FiltroSVG} />
                        <InputBase />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="search">
                        <img src={FiltroSVG} />
                        <InputBase />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fulano</TableCell>
                    <TableCell>Fulano</TableCell>
                    <TableCell>Fulano</TableCell>
                    <TableCell>Fulano</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </ModalHistoryContainer>
    </Modal>
  );
};

export default ModalHistory;
