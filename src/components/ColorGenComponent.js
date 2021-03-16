import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColorGenComponent = ({colors}) => {
  return(
    <View style={{backgroundColor: colors, height: 100, width: 120, flexGrow: 3}} />
  );
}

const styles = StyleSheet.create({});

export default ColorGenComponent;