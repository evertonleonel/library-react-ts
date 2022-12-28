import React from 'react';
import { Button } from '@mui/material';
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

interface IModalLend {
  selectedBook: IBook;
}

const ModalLend: React.FC<IModalLend> = ({ selectedBook }) => {
  const { handleModal, borrowBook } = useModalContext();

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
        const dataEntrada = values.withdrawalDate
          .split('-')
          .reverse()
          .join('/');
        const dataRetirada = values.deliveryDate.split('-').reverse().join('/');
        updateBookLend({
          ...values,
          withdrawalDate: dataEntrada,
          deliveryDate: dataRetirada,
        });
        handleModal('modalLend', 'modalBook');
        borrowBook();
      } catch (err) {
        console.log(err);
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
              id="withdrawalDate"
              name="withdrawalDate"
              label="Data de Entrada"
              variant="outlined"
              value={values.withdrawalDate}
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              helperText={touched.withdrawalDate && errors.withdrawalDate}
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
        </form>
      </ModalLendContainer>
    </Overlay>
  );
};

export default ModalLend;
