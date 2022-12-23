import React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { ModalData } from './ModalLoanStyles';
import { Modal } from '../modalBook/ModalBookStyles';

import CloseModal from '../CloseModal';

const ModalLoan = () => {
  const [blurDeliveryDate, setBlurDeliveryDate] =
    React.useState<boolean>(false);
  const [blurWithdrawalDate, SetBlurWithdrawalDate] =
    React.useState<boolean>(false);

  return (
    <Modal>
      <ModalData>
        <CloseModal onClick={() => console.log('fechar modal')} />
        <h2>Informe os dados do aluno antes de continuar</h2>
        <form className="form">
          <div className="formData">
            <TextField
              id="author"
              name="author"
              label="Nome do Aluno"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="author"
              name="author"
              label="Turma"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="systemEntryDate"
              name="systemEntryDate"
              label="Data de Entrada"
              variant="outlined"
              onClick={() => setBlurDeliveryDate(true)}
              onBlur={() => setBlurDeliveryDate(false)}
              type={blurDeliveryDate ? 'date' : 'null'}
              fullWidth
            />

            <TextField
              id="systemEntryDate"
              name="systemEntryDate"
              label="Data da Retirada"
              variant="outlined"
              onClick={() => SetBlurWithdrawalDate(true)}
              onBlur={() => SetBlurWithdrawalDate(false)}
              type={blurWithdrawalDate ? 'date' : 'null'}
              fullWidth
            />
          </div>
          <div className="formButton">
            <Button
              className="btnEmprestarDevolver"
              type="submit"
              variant="contained"
              color="inherit"
              startIcon={<AutoStoriesOutlinedIcon />}
            >
              Emprestar
            </Button>
          </div>
        </form>
      </ModalData>
    </Modal>
  );
};

export default ModalLoan;
