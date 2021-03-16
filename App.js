import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen.js';
import ComponentScreen from "./src/screens/ComponentScreen.js";
import ListScreen from './src/screens/ListScreen.js';
import ImageScreen from './src/screens/ImageScreen.js';
import CounterScreen from './src/screens/CounterScreen.js';
import ColorsScreen from './src/screens/ColorsScreen.js';
import SuperColorScreen from './src/screens/SuperColorScreen.js';
import TwoWayBindingScreen from './src/screens/TwoWayBindingScreen.js';
import BoxScreen from './src/screens/BoxScreen.js';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Img: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    SuperColor: SuperColorScreen,
    TwoWay: TwoWayBindingScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Citrus App',
    },
  }
);

export default createAppContainer(navigator);
