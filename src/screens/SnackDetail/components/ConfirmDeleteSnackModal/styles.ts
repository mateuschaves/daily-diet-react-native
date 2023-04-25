import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}

  max-height: 200px;

  padding: 30px 24px;
  border-radius: 8px;
`;

export const Row = styled.View`
  flex: 1;
  gap: 16px;
  justify-content: space-between;
  align-items: center;

  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xlarge};
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray200};
  `}

  text-align: center;

  padding: 0 16px;

  margin-bottom: 24px;
`;
