import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import styles from './DrawerContent.stylesheet';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerParamList} from '../../types/navigationTypes';

const DrawerContent = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DrawerParamList>>();
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollStyle}>
        <ImageBackground
          source={require('../../Assets/images/mountains.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../../Assets/images/will.jpg')}
            style={styles.userAvatar}
          />
          <Text style={styles.userName}>Williams</Text>
        </ImageBackground>

        <DrawerItem
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
          style={{paddingVertical: 5}}
        />
      </DrawerContentScrollView>
      <View style={styles.menuDivider}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={styles.menuTextRow}>
            <Ionicons name="share-social" style={styles.menuTextIcon} />
            <Text style={styles.menuText}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={styles.menuTextRow}>
            <Ionicons name="exit-outline" style={styles.menuTextIcon} />
            <Text style={styles.menuText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerContent;
