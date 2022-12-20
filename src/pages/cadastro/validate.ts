import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

export const validationSchema = yup.object({
  id: yup.string(),
  tittle: yup.string().required('Campo obrigatório'),
  author: yup.string().required('Campo obrigatório'),
  status: yup.object(),
  genre: yup.string().required('Campo obrigatório'),
  image: yup.string(),
  systemEntryDate: yup.string(),
  synopsis: yup.string().required('Campo obrigatório'),
  rentHistory: yup.array(),
});

export const initialValues = {
  id: uuidv4(),
  tittle: '',
  author: '',
  status: { description: '', isActive: false },
  genre: '',
  image: '',
  systemEntryDate: '',
  synopsis: '',
  rentHistory: [],
};
