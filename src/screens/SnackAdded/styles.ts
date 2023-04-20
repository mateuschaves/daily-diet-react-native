import styled from 'styled-components/native';
import { SnackAddedProps } from '.';
import { css } from 'styled-components';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 32px;

  align-items: center;
`;

export const Title = styled.Text<SnackAddedProps>`
  ${({ theme, onDiet }) => css`
    color: ${onDiet ? theme.colors.greenDark : theme.colors.redDark};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.xxlarge};
  `};
  text-align: center;
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.medium};
  `};

  text-align: center;
  margin-bottom: 40px;
`;

export const DescriptionBold = styled(Description)`
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ReactionImage = styled.Image`
  width: 224px;
  height: 288px;

  margin-bottom: 32px;
`;
