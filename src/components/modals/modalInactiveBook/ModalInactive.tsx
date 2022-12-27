import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
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
}

const ModalInactive: React.FC<IModalLoan> = ({ selectedBook }) => {
  const { toggleModal } = useModalContext();

  async function newStatusBook(description: string) {
    const updateStatusBook = {
      ...selectedBook,
      status: {
        description: description,
        isActive: false,
      },
    };

    await updateBook(updateStatusBook).then(() => {
      toggleModal('InactiveClose');
    });
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      console.log(values);
      newStatusBook(values.description);
    },
  });

  return (
    <Overlay>
      <ModalInactiveContainer>
        <CloseModal onClick={() => toggleModal('InactiveClose')} />
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
        </form>
      </ModalInactiveContainer>
    </Overlay>
  );
};

export default ModalInactive;
