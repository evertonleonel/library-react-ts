import * as yup from 'yup';

export const validateSchema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O campo E-mail é obrigatório'),
  password: yup.string().required('O campo de senha é obrigatório'),
});
