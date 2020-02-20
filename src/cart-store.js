/**
 * Класс состояния для хранения списка товаров корзины
 */
export default class Store {
  constructor() {
    this._items = [];
  }


  getItems() {
    return this._items;
  }


  getItemCount(id) {
    const target = this._items.find((item) => item._id === id);

    if (target) {
      return target._count;
    }

    return 0;
  }


  setItem(item) {
    const double = this._items.find((good) => good._id === item._id);

    if (double) {
      double._count++;
      double._price += item._price;
    } else {
      this._items.push(item);
    }
  }


  getTotalPrice() {
    let price = 0;

    if (this._items.length) {
      this._items.forEach((item) => {
        price += item._price;
      });
    }

    return price;
  }


  removeItem(id) {
    const el = this._items.find((item) => item._id === +id);
    const index = this._items.indexOf(el);
    this._items.splice(index, 1);
    localStorage.removeItem(`item-${id}`);
  }
}
