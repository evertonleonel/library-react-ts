import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Snackbar, Alert, AlertColor } from '@mui/material';
import { Overlay } from '../modalBook/ModalBookStyles';
import { ModalInactiveContainer } from './ModalInactiveStyles';

import CloseModal from '../CloseModal';
import { useModalContext } from '../../../hooks/useModalContext';

import { IBook } from '../../../interfaces/book';
import { initialValues, validationSchema } from './validate';

import { useFormik } from 'formik';
import { updateBook } from '../../../services/UpdateBook';

interface IModalLoan {
  selectedBook: IBook;
  handleUpdate: () => void;
}

const ModalInactive: React.FC<IModalLoan> = ({
  selectedBook,
  handleUpdate,
}) => {
  const { handleModal } = useModalContext();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severety, setSeverety] = useState<AlertColor>('info');

  async function newStatusBook(description: string) {
    const updateStatusBook = {
      ...selectedBook,
      status: {
        description: description,
        isActive: false,
      },
    };

    await updateBook(updateStatusBook).then(() => {
      setTimeout(() => {
        handleModal('modalInactive', 'modalBook');
      }, 500);
    });
    handleUpdate();
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      newStatusBook(values.description);
      setSeverety('success');
      setMessage('Livro inativado sucesso!');
      setOpen(true);
    },
  });

  return (
    <Overlay>
      <ModalInactiveContainer>
        <CloseModal onClick={() => handleModal('modalInactive', 'modalBook')} />
        <h2>Inativar Livro</h2>
        <form onSubmit={handleSubmit}>
          <div className="formSynopsis">
            <TextField
              id="description"
              name="description"
              label="Descrição"
              multiline
              rows={4}
              fullWidth
              value={values.description}
              onChange={handleChange}
              helperText={errors && errors.description}
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
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={() => {
              setOpen(false);
            }}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert severity={severety} sx={{ width: '100%' }}>
              {message}
            </Alert>
          </Snackbar>
        </form>
      </ModalInactiveContainer>
    </Overlay>
  );
};

export default ModalInactive;
