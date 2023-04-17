import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/Navigation/DrawerNavigator';
import {UserAuthProvider, UserAuthContext} from './src/Context/UserAuthContext';
import auth from '@react-native-firebase/auth';

function App() {
  // const {user, setUser} = React.useContext(UserAuthContext);
  // const [initializing, setInitializing] = useState(true);

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(user => {
  //     setUser(user);
  //     if (initializing) {
  //       setInitializing(false);
  //     }
  //   });
  //   return subscriber;
  // }, []);

  // if (initializing) return null;
  return (
    <UserAuthProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </UserAuthProvider>
  );
}

export default App;
