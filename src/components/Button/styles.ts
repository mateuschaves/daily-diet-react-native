import styled, { css } from 'styled-components/native';
import { Variants } from '.';

interface ButtonProps {
  variant: Variants;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  max-height: 64px;
  height: 64px;

  flex: 1;
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 8px;

  ${({ theme, variant }) => css`
    background-color: ${variant === 'filled' ? theme.colors.gray200 : theme.colors.white};
  `}
`;

export const Title = styled.Text<ButtonProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'filled' ? theme.colors.white : theme.colors.gray100};
    font-size: ${theme.fontSizes.large};
    font-family: ${theme.fonts.bold};
  `};

  margin-left: 12px;
`;
