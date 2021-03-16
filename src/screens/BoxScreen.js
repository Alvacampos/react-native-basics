import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BoxScreen = () => {
  return(
    <View style={styles.viewStyle}>
      <View style={[styles.generalView,styles.viewOne]}/>
      <View style={[styles.generalView, styles.viewTwo]}/>
      <View style={[styles.generalView, styles.viewThree]} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "blue",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center"
    flexDirection: "row",
    position: "absolute",
    ...StyleSheet.absoluteFill
  },
  generalView: {
    height: 50,
    width: 50,
  },
  viewOne: {
    backgroundColor: "red",
    borderColor: "red",
    flex: 1
  },
  viewTwo: {
    backgroundColor: "yellow",
    borderColor: "yellow",
    alignSelf: "center",
    flex: 1
  },
  viewThree: {
    backgroundColor: "green",
    borderColor: "green",
    justifyContent: "flex-end",
    flex: 1
  }
})

export default BoxScreen