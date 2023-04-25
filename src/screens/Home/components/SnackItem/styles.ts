import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 49px;

  padding: 10px 10px;

  border-radius: 8px;
  margin-bottom: 10px;

  ${({ theme }) => css`
    border-color: ${theme.colors.gray400};
    border-width: 1px;
  `}
`;

export const SnackName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.large};
  `}

  text-align: left;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.small};
  `}
`;

export const IsOnDiet = styled.View<{ isOnDiet: boolean }>`
  width: 14px;
  height: 14px;

  border-radius: 7px;

  ${({ theme, isOnDiet }) => css`
    background-color: ${isOnDiet ? theme.colors.greenMid : theme.colors.redMid};
  `}
`;

export const Separator = styled.Text`
  color: ${({ theme }) => theme.colors.gray400};

  margin-left: 10px;
  margin-right: 10px;
`;

export const Column = styled.View`
  flex-direction: row;

  align-items: center;
`;
