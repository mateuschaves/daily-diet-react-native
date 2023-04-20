import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ snackPercent: number }>`
  flex: 1;

  background-color: ${({ theme, snackPercent }) =>
    snackPercent > 50 ? theme.colors.greenLight : theme.colors.redLight};
`;

export const Content = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px;

  padding: 0 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray100};
    font-size: ${theme.fontSizes.medium};
  `};

  margin-top: 33px;
  margin-bottom: 23px;
  text-align: center;
`;

export const Row = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: space-between;
`;
