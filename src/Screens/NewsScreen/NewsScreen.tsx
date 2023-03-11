import React, {FC} from 'react';
import styles from './NewsScreen.stylesheet';

import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../Navigation/HomeStackNavigator';

type Props = NativeStackScreenProps<HomeStackParamsList, 'News'>;

const NewsScreen: FC<Props> = ({route}: Props) => {
  const {details} = route.params;
  //console.log(details);

  return (
    <View style={styles.container}>
      <Text style={styles.newsHeader}>{details.title}</Text>
      <Text style={styles.newsContent}>{details.content}</Text>
    </View>
  );
};

export default NewsScreen;
