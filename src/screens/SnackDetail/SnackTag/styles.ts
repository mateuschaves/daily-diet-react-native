import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  max-width: 180px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray600};
  `}

  padding: 8px 16px 8px 16px;

  gap: 8px;

  border-radius: 1000px;
`;

export const Title = styled.Text``;
