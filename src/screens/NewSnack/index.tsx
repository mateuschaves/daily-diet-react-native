import React from 'react';

import Header from '~/components/Header';
import Field from '~/components/Field';
import IsOnDietField from './components/IsOnDietField';
import Button from '~/components/Button';

import { hasError } from '~/utils/formik';

import useNewSnackViewModel from './view.model';

import { Container, Form, Row } from './styles';

export default function NewSnack() {
  const { formik, goBack, dismissKeyboard } = useNewSnackViewModel();

  return (
    <Container>
      <Header title="Nova refeição" goBack={goBack} />
      <Form onTouchStart={dismissKeyboard}>
        <Field
          label="Nome"
          value={formik.values.snack}
          onChange={formik.handleChange('snack')}
          hasError={hasError(formik, 'snack')}
        />
        <Field
          label="Descrição"
          value={formik.values.description}
          hasError={hasError(formik, 'description')}
          onChange={formik.handleChange('description')}
          fieldSize="large"
        />
        <Row>
          <Field
            label="Data"
            value={formik.values.date}
            onChange={formik.handleChange('date')}
            space
            masked
            hasError={hasError(formik, 'date')}
            inputMaskProps={{
              placeholder: new Date().toLocaleDateString('pt-BR'),
              keyboardType: 'numeric',
              maxLength: 10,
              type: 'datetime',
              options: {
                format: '99/99/9999',
              },
            }}
          />
          <Field
            label="Hora"
            value={formik.values.time}
            onChange={formik.handleChange('time')}
            masked
            hasError={hasError(formik, 'time')}
            inputMaskProps={{
              placeholder: '12:35',
              keyboardType: 'numeric',
              maxLength: 5,
              type: 'datetime',
              options: {
                format: '99:99',
              },
            }}
          />
        </Row>
        <IsOnDietField setFieldValue={formik.setFieldValue} value={formik.values.isOnDiet} />
        <Button title="Cadastrar refeição" onPress={formik.submitForm} />
      </Form>
    </Container>
  );
}
