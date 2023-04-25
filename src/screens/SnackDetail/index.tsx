import React, { useEffect, useState } from 'react';

import Header from '~/components/Header';
import Button from '~/components/Button';

import { useNavigation, useRoute } from '@react-navigation/native';
import SnackModel from '~/common/model/snack.model';
import theme from '~/theme';
import { deleteSnack, getSnackById } from '~/storage/snack';

import {
  Container,
  Form,
  FormDateLabel,
  FormTitle,
  FormDescription,
  FormDate,
  Content,
  Actions,
} from './styles';
import SnackTag from './components/SnackTag';
import ConfirmDeleteSnackModal from './components/ConfirmDeleteSnackModal';

export default function SnackDetail() {
  const route = useRoute();
  const navigation = useNavigation();

  const [snack, setSnack] = useState<SnackModel>();
  const [isDeleteSnackModalVisible, setIsDeleteSnackModalVisible] = useState(false);

  function handleGoBack() {
    navigation.navigate('Home');
  }

  const { snackId } = route.params as { snackId: string };

  console.log('snack', snack);

  const color = snack?.isOnDiet ? theme.colors.greenLight : theme.colors.redLight;

  useEffect(() => {
    getSnackById(snackId).then(setSnack);
  }, [snackId]);

  function handleEditSnack() {
    navigation.navigate('NewSnack', { snackId });
  }

  function handleShowDeleteSnackModal() {
    setIsDeleteSnackModalVisible(true);
  }

  async function handleDeleteSnack() {
    handleDismissDeleteSnackModal();
    if (!snack) return;

    await deleteSnack(snack);
    handleGoBack();
  }

  function handleDismissDeleteSnackModal() {
    setIsDeleteSnackModalVisible(false);
  }

  return (
    <Container backgroundColor={color}>
      <Header title="Refeição" color={color} goBack={handleGoBack} />
      <Form>
        <Content>
          <FormTitle>{snack?.snack}</FormTitle>
          <FormDescription>{snack?.description}</FormDescription>
          <FormDateLabel>Data e hora</FormDateLabel>
          <FormDate>
            {snack?.date} às {snack?.time}
          </FormDate>

          <SnackTag isOnDiet={snack?.isOnDiet || false} />
        </Content>
        <Actions>
          <Button title="Editar Refeição" icon="edit" onPress={handleEditSnack} />
          <Button
            title="Excluir Refeição"
            icon="delete"
            onPress={handleShowDeleteSnackModal}
            variant="outlined"
          />
        </Actions>
      </Form>

      <ConfirmDeleteSnackModal
        isVisible={isDeleteSnackModalVisible}
        onCancel={handleDismissDeleteSnackModal}
        onConfirm={handleDeleteSnack}
      />
    </Container>
  );
}
