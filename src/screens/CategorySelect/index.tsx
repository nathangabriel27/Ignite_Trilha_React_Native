import React, { useState } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { categories } from '../../utils/categories';
import { Button } from '../../components/Forms/Button'
import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,

} from './styles';

interface Category {
  key: string,
  name: string,
}


interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}



export function CategorySelect({ category, setCategory, closeSelectCategory }: Props) {

  function handleCategorySelect(category: Category) {
    setCategory(category)
  }

  return (
    <Container >
      <Header>
        <Title>Categorias</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
      />
      <Footer>
        <Button
          title={'Selecionar'}
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  );
}
