import React from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { StatusBar } from 'expo-status-bar';

import theme from '~/theme';

import { Container, Title, TitleContainer, IconContainer, Description } from './styles';

interface HeaderProps {
  title: number;
  goBack?: () => void;
}

export default function HeaderResume({ title, goBack }: HeaderProps) {
  const titleFormatted = title.toFixed(2).replaceAll('.', ',');
  const color = title >= 50 ? theme.colors.greenLight : theme.colors.redLight;

  return (
    <Container color={color}>
      <StatusBar backgroundColor={color} style="dark" translucent />
      <IconContainer onPress={goBack}>
        <ArrowLeft size={24} color={theme.colors.gray100} />
      </IconContainer>
      <TitleContainer>
        <Title>{titleFormatted}%</Title>
        <Description>das refeições dentro da dieta</Description>
      </TitleContainer>
    </Container>
  );
}
