import React from 'react';
import Modal from 'react-native-modal';

import Button from '~/components/Button';

import { Container, Title, Row } from './styles';

interface ConfirmDeleteSnackModalProps {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDeleteSnackModal({
  isVisible,
  onCancel,
  onConfirm,
}: ConfirmDeleteSnackModalProps) {
  return (
    <Modal isVisible={isVisible}>
      <Container>
        <Title>Deseja realmente excluir o registro da refeição?</Title>
        <Row>
          <Button title="Cancelar" onPress={onCancel} variant="outlined" />
          <Button title="Sim, excluir" onPress={onConfirm} />
        </Row>
      </Container>
    </Modal>
  );
}
