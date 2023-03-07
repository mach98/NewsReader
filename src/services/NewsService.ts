import {NEWS_DATA} from '../data/NEWS_DATA';

export function getNews<INews>() {
  for (let news of NEWS_DATA.results) {
    return news;
  }
}
