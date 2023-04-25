import { getStatusBarHeight } from 'react-native-safearea-height';
import styled, { css } from 'styled-components/native';
import { ColorsType } from '~/theme/index';

export const Container = styled.View<{ color?: string }>`
  flex-direction: row;
  align-items: center;

  ${({ color }) => css`
    background-color: ${color};
  `}

  padding: ${getStatusBarHeight()}px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.fontSizes.xlarge};
  `};
  text-align: center;
`;

export const TitleContainer = styled.Text`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const IconContainer = styled.TouchableOpacity`
  z-index: 9999;
`;
