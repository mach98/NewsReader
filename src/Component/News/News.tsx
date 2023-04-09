import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {API_KEY} from '@env';
import INews from './News.interface';
import styles from './News.stylesheet';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamsList} from '../../types/navigationTypes';

const News: FC<INews> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=ng`;

  const fetchNews = () => {
    setIsLoading(true);
    fetch(URL)
      .then(res => res.json())
      .then(result => {
        setNews(result.results);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const refreshData = () => {
    setIsRefreshing(true);
    fetchNews();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 4000);
  };

  const navigateToDetails = (details: (typeof news)[number]) => {
    navigation.navigate('News', {details});
  };

  const keyExtractor = (item: INews, index: number) => index.toString();

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.activityIndicator} />
      ) : (
        <FlatList
          data={news}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[styles.newsBox, styles.shadowProp]}
                onPress={() => navigateToDetails(item)}>
                <View>
                  <Text style={styles.newsTitle}>{item.title}</Text>
                  <Text style={styles.newsDescription}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={refreshData} />
          }
        />
      )}
    </View>
  );
};

export default News;

// let data = getNews();
// if (data !== undefined) {
//   setNews({...news, ...data});
//   console.log(news);
// }
