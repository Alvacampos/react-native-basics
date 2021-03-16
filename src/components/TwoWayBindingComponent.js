import React from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

const TwoWayBindingComponent = ({name, newName, number, newNumber}) => {
  return(
    <View>
      <Text style={styles.text}>Enter Password:</Text>
      <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={name} onChangeText={(newValue) => newName(newValue)}/>
      {name.length > 5 ? <Text style={styles.text}>{name}</Text> : <Text style={[styles.text, styles.textFail]}>Password length must more than 5 letters long</Text>}      
      <Text style={styles.text}>Test for state update from a child component, state is in the father</Text>
      <Button title="test" onPress={() => newNumber()}/>
      <Text style={styles.text}>{number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    margin: 15
  },
  text: {
    textAlign: "center",
    margin: 10
  },
  textFail: {
    color: 'red'
  }
})

export default TwoWayBindingComponent