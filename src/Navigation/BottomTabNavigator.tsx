import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ExploreScreen from '../Screens/ExploreScreen/ExploreScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';
import BookmarksScreen from '../Screens/BookmarksScreen/BookmarksScreen';
import HomeIcon from 'react-native-vector-icons/Octicons';
import BookmarkIcon from 'react-native-vector-icons/Octicons';
import ExploreIcon from 'react-native-vector-icons/Feather';
import SettingsIcon from 'react-native-vector-icons/Feather';
import {ICON_SIZE} from '../Constants/dimensions';
import {BottomTabParamList} from '../types/navigationTypes';
import HomeStackNavigator from './HomeStackNavigator';
import COLORS from '../Constants/colors';

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              name="home"
              size={ICON_SIZE}
              color={focused ? COLORS.ORANGE : COLORS.GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BookmarkIcon
              name="bookmark"
              size={ICON_SIZE}
              color={focused ? COLORS.ORANGE : COLORS.GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ExploreIcon
              name="compass"
              size={ICON_SIZE}
              color={focused ? COLORS.ORANGE : COLORS.GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SettingsIcon
              name="settings"
              size={ICON_SIZE}
              color={focused ? COLORS.ORANGE : COLORS.GREY}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
