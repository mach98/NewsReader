import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/Navigation/DrawerNavigator';
import {UserAuthProvider} from './src/Context/UserAuthContext';

function App() {
  return (
    <UserAuthProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </UserAuthProvider>
  );
}

export default App;
