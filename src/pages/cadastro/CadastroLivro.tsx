import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Alert, AlertColor, Button, Snackbar } from '@mui/material';
import Adicionar from '../../assets/adicionar.svg';

import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import { IBook } from '../../interfaces/book';
import { useNavigate, useLocation } from 'react-router-dom';
import { CadastroDados } from './CadastroStyles';
import { addNewBook } from '../../services/AddNewBook';
import { validationSchema } from './validate';
import { converterEmBase64 } from '../../services/ConversorBase64';
import { getBooks } from '../../services/GetBooks';

const CadastroLivro: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [message, setMessage] = React.useState('');
  const [genre, setGenre] = useState<string[]>([]);
  const [severety, setSeverety] = React.useState<AlertColor>('info');
  const [img, setImg] = React.useState(state?.bookEdit.image || '');
  const [open, setOpen] = React.useState(false);

  const { values, errors, handleChange, handleSubmit, setFieldValue, touched } =
    useFormik({
      initialValues: {
        id: state.bookEdit ? state.bookEdit.id : uuidv4(),
        tittle: state.bookEdit ? state.bookEdit.tittle : '',
        author: state.bookEdit ? state.bookEdit.author : '',
        status: state.bookEdit
          ? state.bookEdit.status
          : { description: '', isActive: false },
        genre: state.bookEdit ? state.bookEdit.genre : '',
        image: state.bookEdit ? state.bookEdit.image : '',
        systemEntryDate: state.bookEdit
          ? state.bookEdit.systemEntryDate.split('/').reverse().join('-')
          : '',
        synopsis: state.bookEdit ? state.bookEdit.synopsis : '',
        rentHistory: [],
      },
      validationSchema,
      onSubmit(values: IBook) {
        try {
          const data = values.systemEntryDate.split('-').reverse().join('/');

          if (state?.bookEdit) {
            console.log(state);
          } else {
            addNewBook({ ...values, systemEntryDate: data });
            setMessage('Cadastro realizado com sucesso!');
            setSeverety('success');
            setOpen(true);
            navigate('/home');
          }
        } catch (err) {
          setMessage('Error');
          setSeverety('error');
          setOpen(true);
        }
      },
    });

  async function handleImgChange(e: { target: HTMLInputElement }) {
    const raw = e.target.files;
    if (raw && raw.length > 0) {
      const baseImg = await converterEmBase64(raw[0]);
      setImg(baseImg);
      setFieldValue('image', baseImg);
    }
  }

  console.log(state);
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!img) {
      setOpen(true);
      setMessage('Preencha todos os campos');
    }
    handleSubmit(e);
  };

  useEffect(() => {
    getBooks().then((data) => {
      const aux = data.map((el) => {
        return el.genre;
      });
      setGenre(aux.filter((current, i) => aux.indexOf(current) === i));
    });
  }, []);

  return (
    <CadastroDados>
      <form onSubmit={formSubmit}>
        <div className="formImage">
          {img ? (
            <img src={img} width={180} height={206} />
          ) : (
            <span>
              {' '}
              <img src={Adicionar} />
              Capa
            </span>
          )}

          <input
            accept="/image/*"
            type="file"
            name="image"
            id="image"
            onChange={handleImgChange}
          />
        </div>

        <div className="formTittle">
          <TextField
            id="tittle"
            name="tittle"
            value={values.tittle}
            onChange={handleChange}
            label="Título"
            variant="outlined"
            fullWidth
            helperText={touched.tittle && errors.tittle}
          />
        </div>
        <div className="formAuthor">
          <TextField
            id="author"
            name="author"
            label="Autor"
            value={values.author}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            helperText={touched.author && errors.author}
          />
        </div>
        <div className="formSynopsis">
          <TextField
            id="synopsis"
            name="synopsis"
            value={values.synopsis}
            onChange={handleChange}
            label="Sinopse"
            multiline
            rows={4.3}
            fullWidth
            helperText={touched.synopsis && errors.synopsis}
          />
        </div>
        <div className="formGenre">
          <TextField
            id="genre"
            name="genre"
            value={values.genre}
            onChange={handleChange}
            label="Genero"
            select
            fullWidth
            helperText={touched.genre && errors.genre}
          >
            {genre.map((el, index) => {
              return (
                <MenuItem key={index} value={el}>
                  {el}
                </MenuItem>
              );
            })}
          </TextField>
        </div>
        <div className="formDate">
          <TextField
            id="systemEntryDate"
            name="systemEntryDate"
            label="Data de Entrada"
            value={values.systemEntryDate}
            onChange={handleChange}
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            helperText={touched.systemEntryDate && errors.systemEntryDate}
          />
        </div>

        <div className="formButtons">
          <Button
            onClick={() => {
              if (state) {
                navigate('/biblioteca', {
                  state: {
                    bookEdit: state.bookEdit,
                  },
                });
              } else {
                navigate('/home');
              }
            }}
            className="btnCancel"
          >
            Cancelar
          </Button>
          <Button type="submit" className="btnSave">
            Salvar
          </Button>
        </div>
      </form>
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
    </CadastroDados>
  );
};

export default CadastroLivro;
