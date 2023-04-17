import React from 'react';

import { Container, Content, ButtonTitle, ListSectionTitle } from './styles';
import Header from './components/Header';
import DietProgressCard from './components/DietProgressCard';
import Button from '~/components/Button';
import SnackItem from './components/SnackItem';
import { SectionList } from 'react-native';

import { getPercentageOfSnacksOnDiet, groupSnacksByDate } from '~/utils/array';
import SnakModel from '~/common/model/snack.model';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const snacks: SnakModel[] = [
    {
      date: '2023-04-18',
      time: '10:00',
      snack: 'Pêra',
      description: 'Cortada em fatias',
      isOnDiet: true,
    },
    {
      date: '2023-04-17',
      time: '15:30',
      snack: 'Castanhas mistas',
      description: 'Cruas, sem sal',
      isOnDiet: true,
    },
    {
      date: '2023-04-16',
      time: '9:00',
      snack: 'Iogurte natural',
      description: 'Desnatado, com granola',
      isOnDiet: true,
    },
    {
      date: '2023-04-15',
      time: '11:30',
      snack: 'Cottage cheese',
      description: 'Light, com melão',
      isOnDiet: false,
    },
    {
      date: '2023-04-14',
      time: '16:00',
      snack: 'Cenouras baby',
      description: 'Cruas, com homus',
      isOnDiet: true,
    },
    {
      date: '2023-04-13',
      time: '14:00',
      snack: 'Banana',
      description: 'Cortada em rodelas',
      isOnDiet: true,
    },
    {
      date: '2023-04-13',
      time: '18:00',
      snack: 'Palitos de cenoura',
      description: 'Com cream cheese light',
      isOnDiet: true,
    },
    {
      date: '2023-04-12',
      time: '10:30',
      snack: 'Queijo em palito',
      description: 'Light, de mussarela',
      isOnDiet: true,
    },
    {
      date: '2023-04-11',
      time: '15:30',
      snack: 'Grão de bico assado',
      description: 'Temperado com cominho e coentro',
      isOnDiet: false,
    },
    {
      date: '2023-04-10',
      time: '11:00',
      snack: 'Maçã fatiada',
      description: 'Com manteiga de amêndoa',
      isOnDiet: true,
    },
    {
      date: '2023-04-09',
      time: '18:00',
      snack: 'Aipo em palitos',
      description: 'Com cream cheese light',
      isOnDiet: true,
    },
    {
      date: '2023-04-08',
      time: '9:00',
      snack: 'Iogurte grego',
      description: 'Light, natural, com morangos',
      isOnDiet: true,
    },
    {
      date: '2023-04-07',
      time: '11:30',
      snack: 'Cottage cheese',
      description: 'Light, com pêssegos',
      isOnDiet: false,
    },
    {
      date: '2023-04-06',
      time: '16:00',
      snack: 'Cenouras baby',
      description: 'Cruas, com hummus',
      isOnDiet: true,
    },
  ];

  function handleNewSnack() {
    navigation.navigate('NewSnack');
  }

  const snacksOnDietPercentage = getPercentageOfSnacksOnDiet(snacks);

  return (
    <Container>
      <Content>
        <Header />
        <DietProgressCard progress={snacksOnDietPercentage} />

        <ButtonTitle>Refeições</ButtonTitle>
        <Button title="Nova refeição" icon="add" onPress={handleNewSnack} />

        <SectionList
          sections={groupSnacksByDate(snacks)}
          keyExtractor={(item) => item.snack}
          contentContainerStyle={{ marginTop: 32 }}
          renderItem={({ item }) => (
            <SnackItem snack={item.snack} time={item.time} isOnDiet={item.isOnDiet} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <ListSectionTitle>{title}</ListSectionTitle>
          )}
        />
      </Content>
    </Container>
  );
}
