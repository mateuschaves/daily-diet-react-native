import { useEffect, useState } from 'react';

import uuid from 'react-native-uuid';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Keyboard } from 'react-native';
import { useFormik } from 'formik';
import NewSnackValidationSchema from './validation';
import SnackModel from '~/common/model/snack.model';

import { createSnack, getSnackById, updateSnackById } from '~/storage/snack';

function useNewSnackViewModel() {
  const navigation = useNavigation();
  const route = useRoute();
  const id = uuid.v4().toString();

  const [snack, setSnack] = useState<SnackModel | undefined>();

  const params = route?.params as { snackId?: string };

  const snackId = params?.snackId;

  useEffect(() => {
    if (snackId) {
      getSnackById(snackId).then(setSnack);
    }
  }, [snackId]);

  useEffect(() => {
    if (snack) {
      formik.setValues({
        id: snack.id,
        snack: snack.snack,
        description: snack.description,
        date: snack.date,
        time: snack.time,
        isOnDiet: snack.isOnDiet,
      });
    }
  }, [snack]);

  const formik = useFormik({
    initialValues: {
      id,
      snack: '',
      description: '',
      date: new Date().toLocaleDateString('pt-BR'),
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      isOnDiet: true,
    },
    validationSchema: NewSnackValidationSchema,
    onSubmit: snackId ? updateSnack : saveSnack,
  });

  function dismissKeyboard() {
    Keyboard.dismiss();
  }

  function goBack() {
    navigation.navigate('Home');
  }

  async function saveSnack(snack: SnackModel) {
    await createSnack(snack);
    navigation.navigate('SnackAdded', { onDiet: snack.isOnDiet });
  }

  async function updateSnack(snack: SnackModel) {
    await updateSnackById(snack);
    navigation.navigate('Home');
  }

  return {
    formik,
    dismissKeyboard,
    goBack,
    snackId,
  };
}

export default useNewSnackViewModel;
