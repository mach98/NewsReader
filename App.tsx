import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/Navigation/DrawerNavigator';
import {UserAuthContext} from './src/Context/UserAuthContext';

function App() {
  return (
    <UserAuthContext.Provider value={{user: null, setUser: () => {}}}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </UserAuthContext.Provider>
  );
}

export default App;
