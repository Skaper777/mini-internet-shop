import AbstractComponent from './abstract';
/**
 * Класс шаблона для контейнера товаров
 */
export default class Goods extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `
      <ul class="goods">

      </ul>
    `.trim();
  }
}
