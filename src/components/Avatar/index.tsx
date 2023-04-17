import React from 'react';

import { Container, Avatar as AvatarImg, Content } from './styles';

interface AvatarProps {
  uri: string;
}

const Avatar = ({ uri }: AvatarProps) => {
  return (
    <Container>
      <AvatarImg source={{ uri }} />
    </Container>
  );
};

export default Avatar;
