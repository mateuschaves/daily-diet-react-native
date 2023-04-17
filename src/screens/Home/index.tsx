import React from 'react';

import { Container, Content, ButtonTitle, ListSectionTitle } from './styles';
import Header from './components/Header';
import DietProgressCard from './components/DietProgressCard';
import Button from '~/components/Button';
import SnackItem from './components/SnackItem';
import { SectionList } from 'react-native';

import { groupSnacksByDate } from '~/utils/array';
import useHomeViewModel from './view.model';

export default function Home() {
  const { snacks, snacksOnDietPercentage, handleNewSnack } = useHomeViewModel();

  console.log(snacks);
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
