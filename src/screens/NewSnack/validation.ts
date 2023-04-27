import * as yup from 'yup';

const NewSnackValidationSchema = yup.object().shape({
  snack: yup.string().required('Nome é um campo obrigatório'),
  description: yup.string().required('Descrição é um campo obrigatório'),
  date: yup.string().required('Data é um campo obrigatório'),
  time: yup.string().required('Hora é um campo obrigatório'),
  isOnDiet: yup.boolean().required('É obrigatório informar se o lanche está na dieta'),
});

export default NewSnackValidationSchema;
