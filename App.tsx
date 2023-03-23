import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/Navigation/HomeStackNavigator';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';

function App() {
  return (
    <NavigationContainer>
      {/* <HomeStackNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;
