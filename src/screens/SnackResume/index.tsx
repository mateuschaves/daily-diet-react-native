import React from 'react';
import HeaderResume from './components/HeaderResume';
import Card from './components/Card';

import useSnackResume from './view.model';

import { Container, Content, Row, Title } from './styles';

export default function SnackResume() {
  const {
    snackPercent,
    snacksAmount,
    snakcsOnDiet,
    snacksOutOfDiet,
    handleGoBack,
    findBestSnackSequence
  } = useSnackResume();

  return (
    <Container snackPercent={snackPercent}>
      <HeaderResume title={snackPercent} goBack={handleGoBack} />
      <Content>
        <Title>Estatísticas gerais</Title>

        <Card title={findBestSnackSequence()} description="melhor sequência de pratos dentro da dieta" />
        <Card title={snacksAmount} description="refeições registradas" />

        <Row>
          <Card title={snakcsOnDiet} type="positive" description="refeições dentro da dieta" />
          <Card title={snacksOutOfDiet} type="negative" description="refeições fora da dieta" />
        </Row>
      </Content>
    </Container>
  );
}
