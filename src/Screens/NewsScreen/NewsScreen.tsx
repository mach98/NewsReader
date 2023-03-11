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
      <View style={styles.creatorandDateView}>
        <Text style={styles.writerText}>Writer: {details.creator}</Text>
        <Text style={styles.writerText}>Date: {details.pubDate}</Text>
      </View>

      <Text style={styles.newsContent}>{details.content}</Text>
      <Text>Tags: Football</Text>
    </View>
  );
};

export default NewsScreen;
