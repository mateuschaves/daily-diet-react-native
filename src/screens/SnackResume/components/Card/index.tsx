import { View, Text } from 'react-native';
import React from 'react';
import { Container, Title, Description } from './styles';

export type CardType = 'positive' | 'negative' | 'neutral';

interface CardProps {
  title: number;
  description: string;
  type?: CardType;
}

export default function Card({ title, description, type = 'neutral' }: CardProps) {
  return (
    <Container type={type}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
