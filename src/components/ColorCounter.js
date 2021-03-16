import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return(
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center"
  }
});

export default ColorCounter;