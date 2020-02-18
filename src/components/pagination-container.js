import AbstractComponent from './abstract';
/**
 * Класс шаблона для контейнера пагинации
 */
export default class PaginationContainer extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return `
      <div class="pagination-wrapper">
      </div>
    `.trim();
  }
}
