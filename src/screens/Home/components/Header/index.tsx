import React from 'react';

import LogoPng from '~/assets/images/logo.png';

import { Container, Logo } from './styles';
import Avatar from '~/components/Avatar';
import { StatusBar } from 'expo-status-bar';
import theme from '~/theme';

const Header: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.white} style="dark" />
      <Logo source={LogoPng} />
      <Avatar uri="https://i.pravatar.cc/300" />
    </Container>
  );
};

export default Header;
