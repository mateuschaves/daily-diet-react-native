import React from 'react';

import { Container, Description, Progress, Icon } from './styles';
import theme from '~/theme';

export type cardVariant = 'green' | 'red';

interface DietProgressCardProps {
  progress: number;
  variant?: cardVariant;
  onPress?: () => void;
}

const DietProgressCard = ({ progress, onPress, variant = 'green' }: DietProgressCardProps) => {
  const progressFormatted = progress.toFixed(2);

  return (
    <Container variant={variant} onPress={onPress}>
      <Icon color={theme.colors.greenDark} size={24} weight="regular" />
      <Progress>{progressFormatted}%</Progress>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
};

export default DietProgressCard;
