import INews from '../Component/News/News.interface';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type BottomTabParamList = {
  HomeStack: HomeStackParamsList;
  Settings: undefined;
  Explore: undefined;
  Bookmarks: undefined;
};

export type HomeStackParamsList = {
  Home: undefined;
  News: {details: INews};
};

export type DrawerParamList = {
  BottomTab: BottomTabParamList;
  Profile: undefined;
};

export type AuthStackParamsList = {
  Login: undefined;
  GetStarted: undefined;
};

export type HomeStackNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParamsList, 'News'>,
  BottomTabNavigationProp<BottomTabParamList, 'HomeStack'>
>;
