import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ExploreScreen from '../Screens/ExploreScreen/ExploreScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';
import BookmarksScreen from '../Screens/BookmarksScreen/BookmarksScreen';
import HomeIcon from 'react-native-vector-icons/Octicons';
import BookmarkIcon from 'react-native-vector-icons/Octicons';
import ExploreIcon from 'react-native-vector-icons/Feather';
import SettingsIcon from 'react-native-vector-icons/Feather';
import {ICON_SIZE} from '../Constants/dimensions';

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
  Explore: undefined;
  Bookmarks: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <HomeIcon name="home" size={ICON_SIZE} />,
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BookmarkIcon name="bookmark" size={ICON_SIZE} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ExploreIcon name="compass" size={ICON_SIZE} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SettingsIcon name="settings" size={ICON_SIZE} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
