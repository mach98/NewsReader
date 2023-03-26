import React, {FC, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import News from '../../Component/News/News';
import styles from './HomeScreen.stylesheet';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import DrawerButton from '../../Component/DrawerButton/DrawerButton';

const HomeScreen: FC = () => {
  // const [toggle, setToggleDrawer] = useState(false);
  const toggleDrawer = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <DrawerButton onPress={toggleDrawer} />
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
