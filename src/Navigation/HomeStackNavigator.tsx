import React from 'react';

import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import NewsScreen from '../Screens/NewsScreen/NewsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type HomeStackParamsList = {
  Home: undefined;
  News: {id: string};
};

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'News'}}
      />
      <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
