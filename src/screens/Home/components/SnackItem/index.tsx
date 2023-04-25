import React from 'react';

import SnackModel from '~/common/model/snack.model';

import { Container, Time, SnackName, IsOnDiet, Separator, Column } from './styles';

interface SnackItemProps {
  onPress: () => void;
  time: string;
  snack: string;
  isOnDiet: boolean;
}

export default function SnackItem({ time, snack, isOnDiet, onPress }: SnackItemProps) {
  return (
    <Container onPress={() => onPress()}>
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
