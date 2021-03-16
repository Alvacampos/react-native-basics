import React from 'react';
import { View, StyleSheet } from 'react-native';

const SuperColorGenComponent = ({red, green, blue}) => {
  console.log(red)
  console.log(green)
  return(
    <View style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`, height: "100%", width: "100%"}} />
  );
}

const styles = StyleSheet.create({});

export default SuperColorGenComponent;