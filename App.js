import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'

const navigation = createStackNavigator (
  {
    home : HomeScreen
  },
  
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }

);

export default createAppContainer(navigation)