import AbstractComponent from './abstract';
/**
 * Класс шаблона для товара
 */
export default class Good extends AbstractComponent {
  constructor({id, title, image, descr, price, available}) {
    super();
    this._id = id;
    this._title = title;
    this._image = image;
    this._descr = descr;
    this._price = price;
    this._available = available;
  }

  getTemplate() {
    return `
    <div class="good">
      <h2>${this._title}</h2>
    </div>
    `.trim();
  }
}
