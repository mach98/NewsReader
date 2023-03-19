import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GetStartedScreen from '../Screens/GetStartedScreen/GetStartedScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';

export type AuthStackParamsList = {
  Login: undefined;
  GetStarted: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamsList>();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
    </Stack.Navigator>
  );
};
