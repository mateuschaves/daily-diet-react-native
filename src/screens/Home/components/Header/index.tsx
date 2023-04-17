import React from 'react';

import LogoPng from '~/assets/images/logo.png';

import { Container, Logo } from './styles';
import Avatar from '~/components/Avatar';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo source={LogoPng} />
      <Avatar uri="https://i.pravatar.cc/300" />
    </Container>
  );
};

export default Header;
