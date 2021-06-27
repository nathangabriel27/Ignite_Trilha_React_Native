import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}


export function Dashboard() {

  const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'vendas',
      icon: 'dollar-sign'
    },
    date: '12/02/2021',

  },
  {
    id: '2',
    type: 'negative',
    title: 'Hanburgueria Pizzy',
    amount: 'R$ 59,00',
    category: {
      name: 'Aliemntação ',
      icon: 'coffee'
    },
    date: '12/02/2021',

  },
  {
    id: '3',
    type: 'negative',
    title: 'Aluguel apartamento ',
    amount: 'R$ 1.200,00',
    category: {
      name: 'Cobrança',
      icon: 'shopping-bag'
    },
    date: '12/02/2021',

  },
  {
    id: '4',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'vendas',
      icon: 'dollar-sign'
    },
    date: '12/02/2021',

  }]
  return (
    <Container >
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/43018177?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Nathan</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard type='up' title='Entradas' amount='R$ 17.400,00' lastTransaction='Ultima entrada dia 13 de abril' />
        <HighlightCard type='down' title='Saida' amount='R$ 1.259,00' lastTransaction='Ultima entrada dia 03 de abril' />
        <HighlightCard type='total' title='Total' amount='R$ 16,141,00' lastTransaction='01 a 16 de abril' />
      </HighlightCards>



      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

      </Transactions>
    </Container>
  );
}
