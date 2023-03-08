import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {getNews} from '../../services/NewsService';
import {NEWS_DATA} from '../../data/NEWS_DATA';
import {API_KEY} from '@env';
import INews from './News.interface';
import styles from './News.stylesheet';

const News: FC<INews> = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=ng`;

  const fetchNews = () => {
    setIsLoading(true);
    fetch(URL)
      .then(res => res.json())
      .then(result => {
        setNews(result.results);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.newsBox}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default News;

// let data = getNews();
// if (data !== undefined) {
//   setNews({...news, ...data});
//   console.log(news);
// }
