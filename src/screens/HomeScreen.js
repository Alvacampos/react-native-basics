import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  const screenBtn = () => {
    navigation.navigate('Components')
  }

  const listBtn = () => {
    navigation.navigate('List');
  }

  const ImgBtn = () => {
    navigation.navigate('Img');
  }

  const CntBtn = () => {
    navigation.navigate('Counter');
  }

  const colorBtn = () => {
    navigation.navigate('Colors')
  }

  const superColorBtn = () => {
    navigation.navigate('SuperColor')
  }

  const twoWayBtn = () => {
    navigation.navigate('TwoWay')
  }

  const boxBtn = () => {
    navigation.navigate('Box')
  }

  return (
    <View>
      <Button onPress={screenBtn} title="Component Screen"/>
      <Button onPress={listBtn} title="List Screen"/>
      <Button onPress={ImgBtn} title="Image Screen"/>
      <Button onPress={CntBtn} title="Counter Screen"/>
      <Button onPress={colorBtn} title="Color Screen"/>
      <Button onPress={superColorBtn} title="Super Color Screen"/>
      <Button onPress={twoWayBtn} title="Two way data binding"/>
      <Button onPress={boxBtn} title="Box Screen"/>
      {/* <TouchableOpacity onPress={listBtn} style={styles.buttons}>
        <Text>List Screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   buttons: {
//     fontSize: 30,
//     margin: 100,
//     color: "red"
//   },
// });

export default HomeScreen;
