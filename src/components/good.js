import AbstractComponent from './abstract';
/**
 * Класс шаблона для товара
 */

export default class Good extends AbstractComponent {
  constructor({
    _id,
    _title,
    image,
    descr,
    _price,
    available
  }, store, cartController) {
    super();
    this._id = _id;
    this._title = _title;
    this._image = image;
    this._descr = descr;
    this._price = _price;
    this._store = store;
    this._available = available;
    this._cartController = cartController;
    this._count = this._getCount();

    this._onBuyHandler();
  }

  _onBuyHandler() {
    this.getElement().querySelector(`.good__cart-btn`).addEventListener(`click`, () => {
      const good = {
        _id: this._id,
        _title: this._title,
        _price: this._price,
        _count: this._count + 1
      };

      this._store.setItem(good);
      this._cartController.renderCartItems();
    });
  }

  _getCount() {
    return this._store.getItemCount(this._id);
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
