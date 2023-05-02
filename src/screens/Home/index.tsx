import React from 'react';

import { Container, Content, ButtonTitle, ListSectionTitle } from './styles';
import Header from './components/Header';
import DietProgressCard from './components/DietProgressCard';
import Button from '~/components/Button';
import SnackItem from './components/SnackItem';

import { groupSnacksByDate } from '~/utils/array';
import useHomeViewModel from './view.model';
import { SectionList } from 'react-native';

export default function Home() {
  const {
    snacks,
    snacksOnDietPercentage,
    handleNewSnack,
    handleSnackResume,
    snackCardVariant,
    handleDetailSnack,
  } = useHomeViewModel();

  return (
    <Container>
      <Content>
        <Header />
        <DietProgressCard
          progress={snacksOnDietPercentage}
          onPress={handleSnackResume}
          variant={snackCardVariant}
        />

        <ButtonTitle>Refeições</ButtonTitle>
        <Button title="Nova refeição" icon="add" onPress={handleNewSnack} />

        <SectionList
          style={{ flex: 1 }}
          sections={groupSnacksByDate(snacks)}
          keyExtractor={(item) => item?.id?.toString()}
          contentContainerStyle={{ marginTop: 32 }}
          renderItem={({ item }) => (
            <SnackItem
              snack={item.snack}
              time={item.time}
              isOnDiet={item.isOnDiet}
              onPress={() => handleDetailSnack(item.id)}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <ListSectionTitle>{title}</ListSectionTitle>
          )}
        />
      </Content>
    </Container>
  );
}
