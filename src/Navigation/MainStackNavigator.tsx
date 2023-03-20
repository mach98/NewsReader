import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ExploreScreen from '../Screens/ExploreScreen/ExploreScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';
import BookmarksScreen from '../Screens/BookmarksScreen/BookmarksScreen';

export type TabParamList = {
  Home: undefined;
  Settings: undefined;
  Explore: undefined;
  Bookmarks: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

function MainStackNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MainStackNavigator;
