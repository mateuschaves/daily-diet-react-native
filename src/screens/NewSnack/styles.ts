import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray500};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 20px;
`;

export const Form = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
`;
