import styled, { css } from 'styled-components/native';
import { cardVariant } from '.';
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled.TouchableOpacity<{ variant: cardVariant }>`
  background-color: ${({ theme, variant }) =>
    variant === 'green' ? theme.colors.greenLight : theme.colors.redLight};

  justify-content: center;
  align-items: center;

  padding: 16px;

  border-radius: 8px;

  margin-top: 32px;
`;

export const Progress = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xxxlarge};
    font-family: ${theme.fonts.bold};
    font-weight: bold;
    color: ${theme.colors.gray100};
  `}

  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
    font-family: ${theme.fonts.regular};

    color: ${theme.colors.gray200};
  `}
`;

export const Icon = styled(ArrowUpRight)`
  align-self: flex-end;
`;
