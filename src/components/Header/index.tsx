import React from 'react';
import { ArrowLeft } from 'phosphor-react-native';

import theme from '~/theme';

import { Container, Title, TitleContainer, IconContainer } from './styles';

interface HeaderProps {
  title: string;
  goBack?: () => void;
}

export default function Header({ title, goBack }: HeaderProps) {
  return (
    <Container>
      <IconContainer onPress={goBack}>
        <ArrowLeft size={24} color={theme.colors.gray100} />
      </IconContainer>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
}
