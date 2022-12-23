import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Modal } from '../modalBook/ModalBookStyles';
import { ModalInactiveContainer } from './ModalInactiveStyles';

import CloseModal from '../CloseModal';

const ModalInactive: React.FC = () => {
  return (
    <Modal>
      <ModalInactiveContainer>
        <CloseModal onClick={() => console.log('fechar modal')} />
        <h2>Inativar Livro</h2>
        <form>
          <div className="formSynopsis">
            <TextField
              id="description"
              name="description"
              label="Descrição"
              multiline
              rows={4}
              fullWidth
            />
          </div>
          <div className="formButton">
            <Button
              type="submit"
              variant="outlined"
              color="error"
              className="btnSubmit"
            >
              Inativar
            </Button>
          </div>
        </form>
      </ModalInactiveContainer>
    </Modal>
  );
};

export default ModalInactive;
