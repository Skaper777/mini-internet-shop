import AbstractComponent from './abstract';
/**
 * Класс шаблона для корзины
 */
export default class Cart extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `
    <section class="cart">
    </section>
    `.trim();
  }
}
