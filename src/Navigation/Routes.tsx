// import React, {useEffect, useState, useContext} from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import DrawerNavigator from './DrawerNavigator';
// import {UserAuthContext} from '../Context/UserAuthContext';
// import auth from '@react-native-firebase/auth';
// import AuthenticationNavigator from './AuthenticationNavigator';

// const Routes = () => {
//   const {user, setUser} = useContext(UserAuthContext);
//   const [initializing, setInitializing] = useState(true);

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(user => {
//       if (initializing) setInitializing(false);
//       setUser(user);
//     });
//     return subscriber;
//   }, []);

//   if (initializing) return null;

//   return (
//     <NavigationContainer>
//       {user ? <DrawerNavigator /> : <AuthenticationNavigator />}
//     </NavigationContainer>
//   );
// };

// export default Routes;
