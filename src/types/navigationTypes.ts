import INews from '../Component/News/News.interface';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type BottomTabParamList = {
  Home: HomeStackParamsList;
  Settings: undefined;
  Explore: undefined;
  Bookmarks: undefined;
  News: {details: INews};
};

export type HomeStackParamsList = {
  Home: undefined;
  News: {details: INews};
};

export type DrawerParamList = {
  Profile: undefined;
};

export type HomeStackNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParamsList, 'News'>,
  BottomTabNavigationProp<BottomTabParamList, 'Home'>
>;
