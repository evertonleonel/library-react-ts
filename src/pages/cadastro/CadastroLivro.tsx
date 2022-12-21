import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Alert, AlertColor, Button, Snackbar } from '@mui/material';
import Adicionar from '../../assets/adicionar.svg';

import { useFormik } from 'formik';
import { IBook } from '../../interfaces/book';
import { useNavigate } from 'react-router-dom';
import { CadastroDados } from './CadastroStyles';
import { addNewBook } from '../../services/AddNewBook';
import { initialValues, validationSchema } from './validate';
import { converterEmBase64 } from '../../services/ConversorBase64';

const CadastroLivro: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = React.useState('');
  const [severety, setSeverety] = React.useState<AlertColor>('info');
  const [img, setImg] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const { values, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit(values: IBook) {
        try {
          addNewBook(values);
          setMessage('Cadastro realizado com sucesso!');
          setSeverety('success');
          setOpen(true);
          navigate('/home');
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

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!img) {
      setOpen(true);
      setMessage('Preencha todos os campos');
    }
    handleSubmit(e);
  };

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
            helperText={errors && errors.tittle}
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
            helperText={errors && errors.author}
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
            helperText={errors && errors.synopsis}
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
            helperText={errors && errors.genre}
          >
            <MenuItem value="Fantasia">Fantasia</MenuItem>
            <MenuItem value="Ação e Aventura">Ação e Aventura</MenuItem>
            <MenuItem value="Horror">Horror</MenuItem>
            <MenuItem value="Romance">Romance</MenuItem>
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
            helperText={errors && errors.systemEntryDate}
          />
        </div>

        <div className="formButtons">
          <Button
            onClick={() => {
              navigate('/home');
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
