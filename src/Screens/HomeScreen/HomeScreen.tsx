import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import News from '../../Component/News/News';
import styles from './HomeScreen.stylesheet';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <News />
    </SafeAreaView>
  );
};

export default HomeScreen;
