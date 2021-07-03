import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Button'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelectedButton } from '../../components/Forms/CategorySelectedButton'
import { CategorySelect } from '../CategorySelect'


import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';
import { categories } from '../../utils/categories';



export function Register() {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [transactionType, setTransactionType] = useState('')

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  function handleTransactionTypeSelected(type: 'up' | 'down') {
    setTransactionType(type)
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
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
          <CategorySelectedButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>
        <Button title={'Enviar'} />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
