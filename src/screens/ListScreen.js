import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const games = [
    {name: "Wow", test: "123"},
    {name: "LOl", test: "123"},
    {name: "Valorant", test: "123"},
    {name: "DOOM", test: "123"},
    {name: "Age", test: "123"},
    {name: "Cs", test: "123"},
    {name: "Magic", test: "123"},
    {name: "Tetris", test: "123"},
    {name: "1", test: "123"},
    {name: "2", test: "123"},
    {name: "3", test: "123"},
    {name: "4", test: "123"},
  ]
  return (
    <FlatList
      //horizontal
      //showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={games => games.name}
      data={games} 
      renderItem={({item}) => {
        console.log("hola")
        return <Text style={styles.textStyle}>{item.name} - {item.test}</Text>
      }}
    />
  )
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    fontSize: 30
  }
});

export default ListScreen;