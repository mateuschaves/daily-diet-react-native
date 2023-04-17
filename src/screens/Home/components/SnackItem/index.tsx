import React from 'react';
import { Container, Time, SnackName, IsOnDiet, Separator, Column } from './styles';

interface SnackItemProps {
  time: string;
  snack: string;
  isOnDiet: boolean;
}

export default function SnackItem({ time, snack, isOnDiet }: SnackItemProps) {
  return (
    <Container>
      <Column>
        <Time>{time.padStart(5, '0')}</Time>
        <Separator>|</Separator>
        <SnackName numberOfLines={1} ellipsizeMode="tail">
          {snack}
        </SnackName>
      </Column>
      <IsOnDiet isOnDiet={isOnDiet} />
    </Container>
  );
}
