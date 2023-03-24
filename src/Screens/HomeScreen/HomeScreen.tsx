import React, {FC} from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import News from '../../Component/News/News';
import styles from './HomeScreen.stylesheet';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import DrawerIcon from 'react-native-vector-icons/Ionicons';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable>
          <DrawerIcon name="ios-grid-outline" size={20} />
        </Pressable>

        <View>
          <Text>Location</Text>
        </View>
        <HomeIcon name="notifications-outline" size={20} />
      </View>
      <News />
    </SafeAreaView>
  );
};

export default HomeScreen;
