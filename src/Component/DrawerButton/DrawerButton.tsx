import {Pressable} from 'react-native';
import React, {FC} from 'react';
import DrawerIcon from 'react-native-vector-icons/Ionicons';
import {IDrawerButtonProps} from './DrawerButton.interface';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

const DrawerButton: FC<IDrawerButtonProps> = ({
  onPress,
}: IDrawerButtonProps) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  return (
    <Pressable onPress={onPress}>
      <DrawerIcon name="ios-grid-outline" size={20} />
    </Pressable>
  );
};

export default DrawerButton;
