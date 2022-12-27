import * as yup from 'yup';

export const validationSchema = yup.object({
  studentName: yup.string().required('Campo obrigatório'),
  class: yup.string().required('Campo obrigatório'),
  withdrawalDate: yup.string().required('Campo obrigatório'),
  deliveryDate: yup.string().required('Campo obrigatório'),
});

export const initialValues = {
  studentName: '',
  class: '',
  withdrawalDate: '',
  deliveryDate: '',
};
