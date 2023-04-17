import styled, { css } from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

import { FieldSize } from '.';

interface InputProps {
  fieldSize: FieldSize;
  space?: boolean;
  isFocused?: boolean;
  hasError?: boolean;
}

export const Container = styled.View<InputProps>`
  flex: 1;
  max-height: ${({ fieldSize }) => (fieldSize === 'regular' ? 48 : 120)}px;

  margin-bottom: 32px;
  margin-right: ${({ space }) => (space ? 16 : 0)}px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.medium};
  `}
  margin-bottom: 4px;
`;

export const Input = styled.TextInput<InputProps>`
  ${({ theme, fieldSize, isFocused, hasError }) => css`
    border-color: ${theme.colors.gray500};
    border-width: 1px;

    height: ${fieldSize === 'regular' ? 48 : 120}px;

    ${isFocused &&
    css`
      border-color: ${theme.colors.gray300};
      border-width: 1px;
    `}

    ${hasError &&
    css`
      border-color: ${theme.colors.redDark};
      border-width: 1px;
    `}
  `}

  border-radius: 6px;

  padding: 8px 8px;
`;

export const InputMask = styled(TextInputMask)<InputProps>`
  ${({ theme, fieldSize, isFocused, hasError }) => css`
    border-color: ${theme.colors.gray500};
    border-width: 1px;

    height: ${fieldSize === 'regular' ? 48 : 120}px;

    ${isFocused &&
    css`
      border-color: ${theme.colors.gray300};
      border-width: 1px;
    `}

    ${hasError &&
    css`
      border-color: ${theme.colors.redDark};
      border-width: 1px;
    `}
  `}

  border-radius: 6px;

  padding: 8px 8px;
`;
