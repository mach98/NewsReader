import React, {FC} from 'react';
import styles from './NewsScreen.stylesheet';

import {View, Text, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../types/navigationTypes';

type Props = NativeStackScreenProps<HomeStackParamsList, 'News'>;

const NewsScreen: FC<Props> = ({route}: Props) => {
  const {details} = route.params;
  //console.log(details);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.newsHeader}>{details.title}</Text>
        <View style={styles.creatorandDateView}>
          <Text style={styles.writerText}>Writer: {details.creator}</Text>
          <Text style={styles.writerText}>Date: {details.pubDate}</Text>
        </View>

        <Text style={styles.newsContent}>{details.content}</Text>

        <View style={styles.tagsText}>
          <Text style={styles.tagText}>Tags:</Text>
          {details.keywords?.map((keyword, index) => (
            <Text key={index} style={styles.tagText}>
              {' '}
              {keyword},
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsScreen;
