import React from 'react';

import { Container, Description, Progress, Icon } from './styles';
import theme from '~/theme';

export type cardVariant = 'green' | 'red';

interface DietProgressCardProps {
  progress: number | string;
  variant?: cardVariant;
}

const DietProgressCard = ({ progress, variant = 'green' }: DietProgressCardProps) => {
  return (
    <Container variant={variant}>
      <Icon color={theme.colors.greenDark} size={24} weight="regular" />
      <Progress>{progress}%</Progress>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
};

export default DietProgressCard;
