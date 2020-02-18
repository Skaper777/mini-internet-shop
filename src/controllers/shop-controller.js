import Catalog from '../components/catalog';
import Pagination from '../components/pagination';
import PaginationContainer from '../components/pagination-container';
import Goods from '../components/goods';
import Good from '../components/good';
import {
  render,
  Position
} from '../utils';
/**
 * Класс контроллера магазина
 */
export default class ShopController {
  constructor(container, goods) {
    this._container = container;
    this._goods = goods;
    this._goodsContainer = new Goods();
    this._startPos = 0;
    this._lastPos = 15;
    this._targetGoods = this._goods.slice().slice(this._startPos, this._lastPos);
    this._catalog = new Catalog();
    this._pagination = new Pagination(goods, 0);
    this._paginationContainer = new PaginationContainer();
    this._mainPage = this._pagination.getElement().querySelector(`#page-0`);

    this._onPagerClick = this._onPagerClick.bind(this);
  }


  init() {
    render(this._container, this._catalog.getElement(), Position.AFTERBEGIN);
    render(this._catalog.getElement(), this._goodsContainer.getElement(), Position.AFTERBEGIN);

    this._renderGoods();

    render(this._container, this._paginationContainer.getElement(), Position.BEFOREEND);

    this._renderPagination(0);
    this._onPagerHandler();
  }


  _renderGoods() {
    this._goodsContainer.removeElement();

    render(this._catalog.getElement(), this._goodsContainer.getElement(), Position.AFTERBEGIN);

    this._targetGoods.forEach((data) => {
      const good = new Good(data);
      render(this._goodsContainer.getElement(), good.getElement(), Position.BEFOREEND);
    });
  }


  _renderPagination(start) {
    this._paginationContainer.removeElement();

    this._pagination = new Pagination(this._goods, start);
    render(this._container, this._paginationContainer.getElement(), Position.BEFOREEND);
    render(this._paginationContainer.getElement(), this._pagination.getElement(), Position.AFTERBEGIN);
  }


  _onPagerHandler() {
    this._mainPage.classList.add(`pagination__btn--active`);
    document.addEventListener(`click`, this._onPagerClick);
  }


  _onPagerClick(e) {
    const target = e.target;

    const start = this._pagination.getElement().querySelector(`.pagination__first`);
    const finish = this._pagination.getElement().querySelector(`.pagination__last`);

    const fisrtStartBtn = this._pagination.getElement().querySelector(`#page-0`);
    const finalFinishBtn = this._pagination.getElement().querySelector(`#page-${this._pagination.getPaginationLength() - 1}`);

    const goodsInPage = 15;
    const step = 3;

    if (target === start) {
      this._renderPagination(0);
      this._targetGoods = this._goods.slice().slice(this._startPos, this._lastPos);
    } else if (target === finish) {
      this._renderPagination(this._pagination.getPaginationLength() - 4);
      this._targetGoods = this._goods.slice().slice((this._goods.length) - goodsInPage, this._goods.length);
    }

    if (target.id) {
      const id = target.id;
      const idNum = +/\d+/.exec(id);

      this._mainPage.classList.remove(`pagination__btn--active`);
      this._mainPage = this._pagination.getElement().querySelector(`#${id}`);
      this._mainPage.classList.add(`pagination__btn--active`);

      const startPos = idNum * goodsInPage;
      const lastPos = startPos + goodsInPage;

      this._targetGoods = this._goods.slice().slice(startPos, lastPos);

      const buttons = this._pagination.getElement().querySelectorAll(`.pagination__btn`);
      const lastBtn = buttons[buttons.length - 1];
      const firstBtn = buttons[0];

      if (target === lastBtn && target !== finalFinishBtn) {
        this._renderPagination(idNum);
      } else if (target === firstBtn && target !== fisrtStartBtn) {
        this._renderPagination(idNum - step);
        this._targetGoods = this._goods.slice().slice((idNum - step) * goodsInPage, ((idNum - step) * goodsInPage) + goodsInPage);
      } else if (target === finalFinishBtn) {
        this._renderPagination(idNum - step);
      }
    }

    this._renderGoods();
  }
}
