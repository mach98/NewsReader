import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/Navigation/HomeStackNavigator';

function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}

export default App;
