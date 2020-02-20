import AbstractComponent from './abstract';
/**
 * Класс шаблона для товара в корзине
 */
export default class CartItem extends AbstractComponent {
  constructor({_id, _title, _price, _count}) {
    super();
    this._id = _id;
    this._title = _title;
    this._price = _price;
    this._count = _count;
  }

  getTemplate() {
    return `
    <div id="${this._id}" class="cart__item">
      <h4>${this._title}</h4>
      <span>${this._count} шт.</span>
      <p>${this._price} $</p>
      <button class="cart__item-remove">Удалить товар</button>
    </div>
    `.trim();
  }
}
