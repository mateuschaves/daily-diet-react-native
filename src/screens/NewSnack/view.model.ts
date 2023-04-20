import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native';
import { useFormik } from 'formik';
import NewSnackValidationSchema from './validation';
import SnackModel from '~/common/model/snack.model';

import { createSnack } from '~/storage/snack';

function useNewSnackViewModel() {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      snack: '',
      description: '',
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR'),
      isOnDiet: true,
    },
    validationSchema: NewSnackValidationSchema,
    onSubmit: saveSnack,
  });

  function dismissKeyboard() {
    Keyboard.dismiss();
  }

  function goBack() {
    navigation.navigate('Home');
  }

  async function saveSnack(snack: SnackModel) {
    try {
      await createSnack(snack);
      navigation.navigate('SnackAdded', { onDiet: snack.isOnDiet });
    } catch (error) {
      // tratar erro
    }
  }

  return {
    formik,
    dismissKeyboard,
    goBack,
  };
}

export default useNewSnackViewModel;
