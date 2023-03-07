import React, {FC, useState, useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
import News from '../../Component/News/News';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <News />
    </SafeAreaView>
  );
};

export default HomeScreen;
