import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  padding-top: 40px;
`;

export const Content = styled.ScrollView`
  padding: 8px 24px;
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.large};
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.gray100};
  `};

  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ListSectionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xlarge};
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray100};
  `};

  margin-bottom: 8px;
`;
