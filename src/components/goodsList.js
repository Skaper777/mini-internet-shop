/**
 * Компонент создания массива товаров
 */
import {
  getGood
} from '../data';

const GOODS_COUNT = 3000;

export const goods = [];

for (let i = 0; i < GOODS_COUNT; i++) {
  goods.push(getGood(i + 1));
}
