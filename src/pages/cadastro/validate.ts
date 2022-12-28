import * as yup from 'yup';

export const validationSchema = yup.object({
  id: yup.string(),
  tittle: yup.string().required('Campo obrigatório'),
  author: yup.string().required('Campo obrigatório'),
  status: yup.object(),
  genre: yup.string().required('Campo obrigatório'),
  image: yup.string().required('Campo obrigatório'),
  systemEntryDate: yup.string().required('Campo obrigatório'),
  synopsis: yup.string().required('Campo obrigatório'),
  rentHistory: yup.array(),
});
