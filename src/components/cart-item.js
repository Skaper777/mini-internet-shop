import AbstractComponent from './abstract';
/**
 * Класс шаблона для товара в корзине
 */
export default class CartItem extends AbstractComponent {
  constructor({id, title, price}) {
    super();
    this._id = id;
    this._title = title;
    this._price = price;
  }

  getTemplate() {
    return `
    <div class="cart__item">
      <h4>${this._title}</h4>
      <p>${this._price} $</p>
    </div>
    `.trim();
  }
}
