import AbstractComponent from './abstract';
/**
 * Класс шаблона для контейнера товаров корзины
 */
export default class CartIems extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `
    <div class="cart__list">
    </div>
    `.trim();
  }
}
