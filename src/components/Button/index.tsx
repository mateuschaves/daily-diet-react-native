import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title } from './styles';
import theme from '~/theme';

export type Variants = 'outlined' | 'filled';

interface ButtonProps {
  title: string;
  onPress: () => void;
  icon?: keyof typeof MaterialIcons.glyphMap;
  variant?: Variants;
}

const Button = ({ title, icon, onPress, variant = 'filled' }: ButtonProps) => {
  return (
    <Container onPress={onPress} variant={variant}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color={variant === 'filled' ? theme.colors.white : theme.colors.gray200}
        />
      )}
      <Title variant={variant}>{title}</Title>
    </Container>
  );
};

export default Button;
