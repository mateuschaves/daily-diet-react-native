import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ backgroundColor: string }>`
  flex: 1;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Form = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px;

  padding: 24px;

  padding-bottom: 30px;
`;

export const FormTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-size: ${theme.fontSizes.xmedium};
    font-family: ${theme.fonts.bold};
  `}

  margin-bottom: 8px;
`;

export const FormDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-size: ${theme.fontSizes.large};
    font-family: ${theme.fonts.regular};
  `}

  margin-bottom: 24px;
`;

export const FormDateLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-size: ${theme.fontSizes.medium};
    font-family: ${theme.fonts.bold};
  `}

  margin-bottom: 8px;
`;

export const FormDate = styled(FormDescription)``;

export const Content = styled.View`
  flex: 1;
`;

export const Actions = styled.View`
  gap: 8px;
`;
