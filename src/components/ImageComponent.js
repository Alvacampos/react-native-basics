import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';

const ImageComponent = ({title, img}) => {
  return (
    <View>
      <Image style={styles.imgStyle} source={img}/>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imgStyle: {
    width: "100%",
    height: 300
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
  }
})

export default ImageComponent;