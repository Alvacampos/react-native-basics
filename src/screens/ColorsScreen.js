import React, { useState } from 'react';
import { View, ScrollView, FlatList, Button, StyleSheet } from 'react-native';
import ColorGenComponent from '../components/ColorGenComponent';

const ColorsScreen = () => {
  const [color, setColor] = useState([]);

  const getMoreColors = () => {
    setColor([...color, randomRgb()] )
  }

  const randomRgb = () => {
    return `rgb(
      ${Math.floor(Math.random()*256)}, 
      ${Math.floor(Math.random()*256)}, 
      ${Math.floor(Math.random()*256)}
    )`
  }

  const colorList = color.map(e => {
      return <ColorGenComponent key={e} colors={e}/>
    })
  

  return(
    <View>
      <Button title="Add a color" onPress={getMoreColors} style={styles.button}/>
      <ScrollView showsVerticalScrollIndicator={false} style={{position: "relative"}}>
        <View style={styles.colorScreen}>
        {/* <FlatList
          style={styles.colorScreen}
          keyExtractor={(item) => item}
          data={color}
          renderItem={({item}) => {
            return <ColorGenComponent colors={item}/>
          }}
        /> */}
        {colorList}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  colorScreen: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
  },
  button: {
    position: "absolute",
    top: 0
  }
});

export default ColorsScreen;

