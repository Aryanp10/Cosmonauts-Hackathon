import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import OptionalCounterScreen from './src/screens/OptionalCounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import OptionalRgbScreen from './src/screens/OptionalRgbScreen';
import TextScreen from './src/screens/TextScreen';
import MemeTextScreen from './src/screens/MemeTextScreen';
import BoxScreen from './src/screens/BoxScreen';
import _IntroScreen from './src/screens/_IntroScreen'

const navigator = createStackNavigator(
  {
    Intro: _IntroScreen,
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: OptionalCounterScreen,
    Color: ColorScreen,
    Rgb: OptionalRgbScreen,
    Text: TextScreen,
    MemeText: MemeTextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Hermit',
      headerTitleAlign: 'center'
    },
  },
);

export default createAppContainer(navigator);
