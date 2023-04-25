import React from 'react';
import { ArrowLeft } from 'phosphor-react-native';

import theme from '~/theme';

import { Container, Title, TitleContainer, IconContainer } from './styles';
import { StatusBar } from 'expo-status-bar';

interface HeaderProps {
  title: string;
  goBack?: () => void;
  color?: string;
}

export default function Header({ title, goBack, color }: HeaderProps) {
  return (
    <Container color={color}>
      <StatusBar backgroundColor={color} style="dark" translucent />

      <IconContainer onPress={goBack}>
        <ArrowLeft size={24} color={theme.colors.gray100} />
      </IconContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
}
