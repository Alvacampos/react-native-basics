import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
  const test = "Getting started with React Native!";

  const name = "Gonzalo";

  return (
    <View>
      <Text style={styles.titleStyle}>{test}</Text>
      <Text style={styles.textStyle}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45
  },
  textStyle: {
    fontSize: 20
  }
})

export default ComponentScreen;