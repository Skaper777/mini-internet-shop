import AbstractComponent from './abstract';
import Store from '../cart-store';
/**
 * Класс шаблона для товара
 */
const store = new Store();

export default class Good extends AbstractComponent {
  constructor({id, title, image, descr, price, available}) {
    super();
    this._id = id;
    this._title = title;
    this._image = image;
    this._descr = descr;
    this._price = price;
    this._available = available;
    this._count = this._getCount();

    this._onBuyHandler();
  }

  _onBuyHandler() {
    this.getElement().querySelector(`.good__cart-btn`).addEventListener(`click`, () => {
      store.setItem({
        id: this._id,
        title: this._title,
        price: this._price,
        count: this._count + 1
      });
    });
  }

  _getCount() {
    return store.getItemCount(this._id);
  }

  getTemplate() {
    return `
    <div id="good-${this._id}" class="good">
      <h2>${this._title}</h2>
      <img src="${this._image}">
      <p>${this._descr}</p>
      <p>${this._price} $</p>
      <div class="good__cart">
        <button class="good__cart-btn">Добавить в корзину</button>
        <span class="good__cart-count">${this._count} шт.</span>
      </div>
    </div>
    `.trim();
  }
}
