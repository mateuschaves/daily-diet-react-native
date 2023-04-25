import React from 'react';

import OffDietImage from '~/assets/images/off-diet-meal.png';
import OnDietImage from '~/assets/images/on-diet-meal.png';

import { useNavigation, useRoute } from '@react-navigation/native';

import Button from '~/components/Button';

import { Container, Title, Description, ReactionImage, Content, DescriptionBold } from './styles';
import { View } from 'react-native';

export interface SnackAddedProps {
  onDiet: boolean;
}

export default function SnackAdded() {
  const route = useRoute();
  const navigation = useNavigation();

  const { onDiet } = route.params as SnackAddedProps;

  function handleGoToHome() {
    navigation.navigate('Home');
  }

  const image = onDiet ? OnDietImage : OffDietImage;
  const title = onDiet ? 'Continue assim!' : 'Que pena!';
  const DescriptionFormatted = onDiet ? (
    <Description>
      Você continua <DescriptionBold>dentro da dieta</DescriptionBold>. Muito bem!
    </Description>
  ) : (
    <Description>
      Você <DescriptionBold>saiu da dieta</DescriptionBold> dessa vez, mas continue se esforçando e
      não desista!
    </Description>
  );

  return (
    <Container>
      <Title onDiet={onDiet}>{title}</Title>
      {DescriptionFormatted}
      <ReactionImage source={image} resizeMethod="auto" resizeMode="contain" />

      <Button title="Ir para a página inicial" onPress={handleGoToHome} />
    </Container>
  );
}
