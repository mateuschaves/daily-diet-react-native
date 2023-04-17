import styled, { css } from 'styled-components/native';

interface InputProps {
  isOnDiet: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.medium};
  `}

  margin-bottom: 8px;
`;

export const ButtonYes = styled.TouchableOpacity<InputProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme, isOnDiet }) => css`
    background-color: ${isOnDiet ? theme.colors.greenMid : theme.colors.gray600};
    border-color: ${isOnDiet ? theme.colors.greenDark : theme.colors.gray600};
  `}

  border-width: 1px;

  height: 50px;

  margin-right: 16px;

  border-radius: 6px;

  align-items: center;
`;

export const ButtonNo = styled(ButtonYes)`
  ${({ theme, isOnDiet }) => css`
    background-color: ${!isOnDiet ? theme.colors.redMid : theme.colors.gray600};
    border-color: ${!isOnDiet ? theme.colors.redDark : theme.colors.gray600};
  `}

  margin-right: 0;
`;

export const ButtonOptionsText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.medium};
  `}

  margin-left: 8px;
`;

export const YesCircle = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.greenDark};
  `}

  width: 8px;
  height: 8px;
  border-radius: 8px;
`;

export const NoCircle = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.redDark};
  `}

  width: 8px;
  height: 8px;
  border-radius: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;
