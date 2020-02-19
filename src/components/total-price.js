import AbstractComponent from './abstract';
/**
 * Класс шаблона для итоговой цены
 */
export default class TotalPrice extends AbstractComponent {
  constructor(totalPrice) {
    super();
    this._totalPrice = totalPrice || 0;
  }

  getTemplate() {
    return `
      <p class="cart__total-price">Итоговая цена: ${this._totalPrice} $</p>
    `.trim();
  }
}
