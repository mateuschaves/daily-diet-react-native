import React, { useState } from 'react';
import {
  ButtonYes,
  ButtonNo,
  ButtonOptionsText,
  Container,
  Label,
  NoCircle,
  Row,
  YesCircle,
} from './styles';

interface IsOnDietFieldProps {
  value: boolean;
  setFieldValue: (field: string, value: boolean) => void;
}

export default function IsOnDietField({ value, setFieldValue }: IsOnDietFieldProps) {
  function handleIsOnDietYes() {
    setFieldValue('isOnDiet', true);
  }

  function handleIsOnDietNo() {
    setFieldValue('isOnDiet', false);
  }

  return (
    <Container>
      <Label>Está dentro da dieta ?</Label>
      <Row>
        <ButtonYes isOnDiet={value} onPress={handleIsOnDietYes}>
          <YesCircle />
          <ButtonOptionsText>Sim</ButtonOptionsText>
        </ButtonYes>
        <ButtonNo isOnDiet={value} onPress={handleIsOnDietNo}>
          <NoCircle />
          <ButtonOptionsText>Não</ButtonOptionsText>
        </ButtonNo>
      </Row>
    </Container>
  );
}
