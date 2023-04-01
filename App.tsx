import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/Navigation/HomeStackNavigator';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import DrawerNavigator from './src/Navigation/DrawerNavigator';

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
