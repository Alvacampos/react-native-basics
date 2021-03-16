import React, { useReducer } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import SuperColorGenComponent from '../components/SuperColorGenComponent.js';
import ColorCounter from '../components/ColorCounter.js';

const COLOR_INCREMENT = 5;
const COLOR_DECREMENT = -5

const reducer = (state, action) => {
  switch(action.type){
    case "change_red":       
      return { ...state, red: state.red + action.payload > 255 || state.red + action.payload < 0 ? state.red  : state.red + action.payload}
    case "change_green": 
    return { ...state, green: state.green + action.payload > 255 || state.green + action.payload < 0 ? state.green  : state.green + action.payload}
    case "change_blue": 
    return { ...state, blue: state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state.green  : state.blue + action.payload}
    default:
      return state
  }
}

const SuperColorScreen = () => {
  // REDUCER
  // state === {red: Number, green: Number, blue: Number}
  // action === {type: 'color', payload: Number}
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  })
  const {red, green, blue} = state

  // NORMAL STATE
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // const setColor = (color, change) => {
    // switch(color){
    //   case "red": red + change > 255 || red + change < 0 ? null : setRed(red + change)
    //     break;
    //   case "green": green + change > 255 || green + change < 0  ? null : setGreen(green + change)
    //     break;
    //   case "blue": blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
    //     break;
    // }
  // }

  console.log(state)

  return(
    <View>
      <ColorCounter 
        color="Red" 
        onIncrease={() => dispatch({type: "change_red", payload: COLOR_INCREMENT})} 
        onDecrease={() => dispatch({type: "change_red", payload: COLOR_DECREMENT})} />
      <ColorCounter 
        color="Green"
        onIncrease={() => dispatch({type: "change_green", payload: COLOR_INCREMENT})} 
        onDecrease={() => dispatch({type: "change_green", payload: COLOR_DECREMENT})}/>
      <ColorCounter 
        color="Blue"
        onIncrease={() => dispatch({type: "change_blue", payload: COLOR_INCREMENT})} 
        onDecrease={() => dispatch({type: "change_blue", payload: COLOR_DECREMENT})}/>
      <Text style={styles.text}>Color is RGB:({red}, {green}, {blue})</Text>
      <View style={styles.view}>
        <SuperColorGenComponent red={red} green={green} blue={blue}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center"
  }
})

export default SuperColorScreen;