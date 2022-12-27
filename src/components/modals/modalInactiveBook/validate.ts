import * as yup from 'yup';

export const validationSchema = yup.object({
  description: yup.string().required(),
});

export const initialValues = {
  description: '',
};
