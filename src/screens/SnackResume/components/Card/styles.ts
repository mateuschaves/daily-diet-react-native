import styled, { css } from 'styled-components/native';
import { CardType } from '.';
import theme from '~/theme';

const cardTypeBackgroundDictionary: Record<CardType, string> = {
  negative: theme.colors.redLight,
  positive: theme.colors.greenLight,
  neutral: theme.colors.gray600,
};

export const Container = styled.View<{ type: CardType }>`
  flex: 1;
  justify-content: center;
  align-items: center;

  ${({ type }) => css`
    background-color: ${cardTypeBackgroundDictionary[type]};
    max-height: ${type === 'neutral' ? 89 : 107}px;
    margin-right: ${type === 'positive' ? 12 : 0}px;
  `}

  border-radius: 8px;

  padding: 16px;

  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray100};
    font-size: ${theme.fontSizes.xxlarge};
  `}

  text-align: center;

  margin-bottom: 8px;
`;

export const Description = styled(Title)`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.gray200};
    font-size: ${theme.fontSizes.medium};
  `}
`;
