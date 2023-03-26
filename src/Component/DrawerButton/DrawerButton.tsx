import {Pressable} from 'react-native';
import React, {FC} from 'react';
import DrawerIcon from 'react-native-vector-icons/Ionicons';
import {IDrawerButtonProps} from './DrawerButton.interface';

const DrawerButton: FC<IDrawerButtonProps> = (props: IDrawerButtonProps) => {
  return (
    <Pressable onPress={props.onPress}>
      <DrawerIcon name="ios-grid-outline" size={20} />
    </Pressable>
  );
};

export default DrawerButton;
