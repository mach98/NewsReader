import {View, Text} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerParamList} from '../../types/navigationTypes';

const DrawerContent = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DrawerParamList>>();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
