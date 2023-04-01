import React, {FC, useState} from 'react';
import {SafeAreaView, Text, View, RefreshControl} from 'react-native';
import News from '../../Component/News/News';
import styles from './HomeScreen.stylesheet';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import DrawerButton from '../../Component/DrawerButton/DrawerButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';

const HomeScreen: FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // const toggleDrawer = () => {
  //   navigation.openDrawer();
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <DrawerButton
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        {/* <DrawerButton onPress={toggleDrawer} /> */}
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
