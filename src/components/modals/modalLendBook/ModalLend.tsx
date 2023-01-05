import React, { useState } from 'react';
import { Alert, AlertColor, Button, Snackbar } from '@mui/material';
import TextField from '@mui/material/TextField';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { ModalLendContainer } from './ModalLendStyles';
import { Overlay } from '../modalBook/ModalBookStyles';

import CloseModal from '../CloseModal';
import { useModalContext } from '../../../hooks/useModalContext';
import { IBook, IRentHistory } from '../../../interfaces/book';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './validate';
import { updateBook } from '../../../services/UpdateBook';
import moment from 'moment';

interface IModalLend {
  selectedBook: IBook;
}

const ModalLend: React.FC<IModalLend> = ({ selectedBook }) => {
  const { handleModal, borrowBook } = useModalContext();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severety, setSeverety] = useState<AlertColor>('info');

  async function updateBookLend(values: IRentHistory) {
    const updateRentBook: IBook = {
      ...selectedBook,
      rentHistory: [...selectedBook.rentHistory, values],
    };

    await updateBook(updateRentBook);
  }

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      try {
        const dataEntrega = new Date(values.withdrawalDate).toISOString();

        const dataRetirada = new Date(values.deliveryDate).toISOString();

        if (moment(dataRetirada).isAfter(dataEntrega)) {
          setOpen(true);
          setSeverety('warning');
          setMessage(
            'A data de retirada não pode ser maior que a data de entrega'
          );
          return;
        }

        updateBookLend({
          ...values,
          withdrawalDate: dataEntrega,
          deliveryDate: dataRetirada,
        });
        setSeverety('success');
        setMessage('Livro devolvido com sucesso!');
        setOpen(true);
        setTimeout(() => {
          borrowBook();
          handleModal('modalLend', 'modalBook');
        }, 500);
      } catch (err) {
        setSeverety('warning');
        setMessage('Algo deu errado');
        setOpen(true);
      }
    },
  });

  return (
    <Overlay>
      <ModalLendContainer>
        <CloseModal onClick={() => handleModal('modalLend', 'modalBook')} />
        <h2>Informe os dados do aluno antes de continuar</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="formData">
            <TextField
              id="studentName"
              name="studentName"
              label="Nome do Aluno"
              variant="outlined"
              value={values.studentName}
              onChange={handleChange}
              fullWidth
              helperText={touched.studentName && errors.studentName}
            />

            <TextField
              id="class"
              name="class"
              label="Turma"
              variant="outlined"
              value={values.class}
              onChange={handleChange}
              fullWidth
              helperText={touched.class && errors.class}
            />
            <TextField
              id="deliveryDate"
              name="deliveryDate"
              label="Data da Retirada"
              variant="outlined"
              value={values.deliveryDate}
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              helperText={touched.deliveryDate && errors.deliveryDate}
            />
            <TextField
              id="withdrawalDate"
              name="withdrawalDate"
              label="Data da Entrega"
              variant="outlined"
              value={values.withdrawalDate}
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              helperText={touched.withdrawalDate && errors.withdrawalDate}
            />
          </div>
          <div className="formButton">
            <Button
              type="submit"
              className="btnEmprestarDevolver"
              variant="contained"
              color="inherit"
              startIcon={<AutoStoriesOutlinedIcon />}
            >
              Emprestar
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
      </ModalLendContainer>
    </Overlay>
  );
};

export default ModalLend;
