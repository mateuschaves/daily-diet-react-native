import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 16px 24px;
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
