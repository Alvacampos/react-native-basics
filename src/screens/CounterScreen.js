import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const INCREASE_COUNTER = 1;

const reducer = (state, action) => {
  switch(action.type) {
    case "change_increment": 
      return {...state, counter: state.counter + action.payload}
    case "change_decrement":
      return {...state, counter: state.counter - action.payload}
    default:
      return state
  }
}

const CounterScreen = () => {
  // REDUCER
  const [state, dispatch] = useReducer(reducer, {
    counter: 0  
  })
  const {counter} = state
  // STATE
  // const [counter, setCounter] = useState(0);

  // const increaseCtn = () => {
  //   setCounter(counter + 1)
  // }

  // const decreaseCtn = () => {
  //   setCounter(counter - 1)
  // }

  return(
    <View>
      <Button title="Increase" onPress={() => dispatch({type: "change_increment", payload: INCREASE_COUNTER})}/>
      <Button title="Decrease" onPress={() => dispatch({type: "change_decrement", payload: INCREASE_COUNTER})} />
      <Text style={styles.txtStyle}>
        Current Count: {counter}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex"
  },
  txtStyle: {
    fontSize: 30,
    textAlign: "center",
    width: 100,
    alignSelf: "center"
  }
})

export default CounterScreen;