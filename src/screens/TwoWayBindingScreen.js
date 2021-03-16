import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import TwoWayBindingComponent from '../components/TwoWayBindingComponent.js'

const TwoWayBindingScreen = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)

  const setNewNumber = () => {
    setNumber(number + 1)
  }

  return (
    <View>
      <TwoWayBindingComponent name={name} newName={(newValue) => setName(newValue)} number={number} newNumber={() => setNewNumber()}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default TwoWayBindingScreen;