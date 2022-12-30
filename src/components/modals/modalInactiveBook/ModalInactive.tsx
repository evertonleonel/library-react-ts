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
  const { handleModal, inactivedBook } = useModalContext();

  async function newStatusBook(description: string) {
    const updateStatusBook = {
      ...selectedBook,
      status: {
        description: description,
        isActive: false,
      },
    };

    await updateBook(updateStatusBook).then(() => {
      inactivedBook();
      handleModal('modalInactive', 'modalBook');
    });
  }

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      newStatusBook(values.description);
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
        </form>
      </ModalInactiveContainer>
    </Overlay>
  );
};

export default ModalInactive;
