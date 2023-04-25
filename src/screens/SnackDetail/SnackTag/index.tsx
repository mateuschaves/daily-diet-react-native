import React from 'react';
import theme from '~/theme';
import { Circle } from 'phosphor-react-native';

import { Container, Title } from './styles';

interface SnackTagProps {
  isOnDiet: boolean;
}

export default function SnackTag({ isOnDiet }: SnackTagProps) {
  const snackTitle = isOnDiet ? 'dentro da dieta' : 'fora da dieta';
  const snackColor = isOnDiet ? theme.colors.greenDark : theme.colors.redDark;

  return (
    <Container>
      <Circle color={snackColor} size={12} weight="fill" />
      <Title>{snackTitle}</Title>
    </Container>
  );
}
