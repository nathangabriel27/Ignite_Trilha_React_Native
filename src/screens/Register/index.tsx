import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
} from './styles';


export function Register() {

  return (
    <Container >
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input
            placeholder={'Nome'}
          />
          <Input
            placeholder={'Preço'}
          />
        </Fields>
        <Button title={'Enviar'} />
      </Form>
    </Container>
  );
}
