import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelected } from '../../components/Forms/CategorySelected'
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';



export function Register() {
  const [transactionType, setTransactionType] = useState('')

  function handleTransactionTypeSelected(type: 'up' | 'down') {
    setTransactionType(type)
  }

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
          <TransactionTypes>
            <TransactionTypeButton
              type={'up'}
              title={'income'}
              onPress={() => handleTransactionTypeSelected('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type={'down'}
              title={'oucome'}
              onPress={() => handleTransactionTypeSelected('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionTypes>
          <CategorySelected title={'Categorias'} />
        </Fields>
        <Button title={'Enviar'} />
      </Form>
    </Container>
  );
}
