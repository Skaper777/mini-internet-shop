/**
 * Класс состояния для хранения списка товаров корзины
 */
export default class Store {
  constructor() {
    this._items = [
      {
        id: null,
        title: `Test item`,
        price: 500,
        count: 1
      }
    ];
  }

  getItems() {
    return this._items;
  }

  getItemCount(id) {
    const target = this._items.find((item) => item.id === id);

    if (target) {
      return target.count;
    }

    return 0;
  }

  setItem(item) {
    const double = this._items.find((good) => good.id === item.id);

    if (double) {
      double.count++;
    }

    this._items.push(item);
  }
}
