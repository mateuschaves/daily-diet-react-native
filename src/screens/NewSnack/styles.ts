import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray500};

  padding-top: ${getStatusBarHeight() + 16}px;
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
