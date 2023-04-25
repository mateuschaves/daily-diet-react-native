import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray500};
`;

export const Form = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px;

  padding: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
`;
