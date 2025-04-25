import * as Yup from 'yup';

export const taskSchema = Yup.object().shape({
  title: Yup.string().required('Zorunlu Alan'),
  description: Yup.string().required('Zorunlu alan'),
  startDate: Yup.string().required('Zorunlu alan'),
  endDate: Yup.string().required('Zorunlu alan'),
});
