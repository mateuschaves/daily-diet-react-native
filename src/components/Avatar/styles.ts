import styled from 'styled-components/native';

export const Container = styled.View`
  width: 43px;
  height: 43px;

  justify-content: center;
  align-items: center;

  border-color: ${({ theme }) => theme.colors.gray100};
  border-width: 2px;
  border-radius: 21px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;
`;

export const Content = styled.View`
  padding: 50px 16px;
`;
