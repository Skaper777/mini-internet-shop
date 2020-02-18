import AbstractComponent from './abstract';
/**
 * Класс шаблона для пагинации
 */
export default class Pagination extends AbstractComponent {
  constructor(goods, begin) {
    super();
    this._goods = goods;
    this._goodsInPage = 15;
    this._pages = new Array(this._getPagesCount()).fill(``).map((item, index) => index + 1);
    this._currentPages = this._pages.slice().slice(begin, begin + 4);
  }

  getPaginationLength() {
    return this._pages.length;
  }

  _getPagesCount() {
    return this._goods.length / this._goodsInPage;
  }

  _renderPagination() {
    return this._currentPages.map((item) => `<li id="page-${item - 1}" class="pagination__btn">${item}</li>`).join(``);
  }

  getTemplate() {
    return `
      <ul class="pagination">
        <li class="pagination__first">Начало</li>
        ${this._renderPagination()}
        <li class="pagination__last">Конец</li>
      </ul>
    `.trim();
  }
}
