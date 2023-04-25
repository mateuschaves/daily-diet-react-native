import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-safearea-height';

export const Container = styled.View<{ color: string }>`
  background-color: ${({ color }) => color};

  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 50}px;
  padding-bottom: 34px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.xxxlarge};
  `};
  text-align: center;
`;

export const TitleContainer = styled.View``;

export const Description = styled(Title)`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.gray200};
    font-family: ${theme.fonts.regular};
  `};
`;

export const IconContainer = styled.TouchableOpacity`
  z-index: 9999;
  transform: translateX(24px);
`;
