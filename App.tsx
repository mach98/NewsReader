import React from 'react';
import 'react-native-gesture-handler';
<<<<<<< HEAD
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
=======
import Providers from './src/Navigation';

function App() {
  return <Providers />;
>>>>>>> bf8616ccc4b7d645fb43f3b33eabcc57ae5b0d54
}

export default App;
