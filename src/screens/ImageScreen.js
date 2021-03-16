import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ImageComponent from '../components/ImageComponent.js';

const ImageScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageComponent style={styles.imgStyle} title="Pic 1" img={require("../../assets/simpsons1.jpeg")}/>
      <ImageComponent style={styles.imgStyle} title="Pic 2" img={require("../../assets/simpsons2.jpg")}/>
      <ImageComponent style={styles.imgStyle} title="Pic 3" img={require("../../assets/simpsons3.jpg")}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    width: 20,
    height: 50,
    borderColor: "red",
    borderWidth: 2
  }
})

export default ImageScreen;