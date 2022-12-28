import * as yup from 'yup';

export const validationSchema = yup.object({
  description: yup.string().required('Campo obrigatório'),
});

export const initialValues = {
  description: '',
};
