import AbstractComponent from './abstract';
/**
 * Класс шаблона для каталога
 */
export default class Catalog extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `
      <section class="catalog">

      </section>
    `.trim();
  }
}
