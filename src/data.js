import {getRandomValue} from './utils';

// Данные товара
export const getGood = (count) => ({
  _id: count,
  _title: `Стул ${count}`,
  image: `https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg`,
  descr: `Супер стул`,
  _price: getRandomValue(100, 1000),
  available: Math.random() >= 0.5
});
