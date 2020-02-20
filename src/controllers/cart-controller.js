import Cart from '../components/cart';
import CartItems from '../components/cart-items';
import CartItem from '../components/cart-item';
import TotalPrice from '../components/total-price';

import {
  render,
  Position
} from '../utils';
/**
 * Контроллер корзины
 */
export default class CartController {
  constructor(container, store) {
    this._container = container;
    this._cart = new Cart();
    this._store = store;
    this._cartItems = new CartItems();
    this._totalPriceValue = 0;
    this._totalPrice = new TotalPrice(this._totalPriceValue);
  }


  init() {
    render(this._container, this._cart.getElement(), Position.AFTERBEGIN);
    render(this._cart.getElement(), this._cartItems.getElement(), Position.AFTERBEGIN);
    render(this._cart.getElement(), this._totalPrice.getElement(), Position.BEFOREEND);

    this._removeCartItem();
  }

  renderCartItems() {
    this._cartItems.removeElement();
    render(this._cart.getElement(), this._cartItems.getElement(), Position.BEFOREEND);

    const goodsData = this._store.getItems();
    this._totalPriceValue = this._store.getTotalPrice();

    goodsData.forEach((good) => {
      const cartItem = new CartItem(good);
      render(this._cartItems.getElement(), cartItem.getElement(), Position.AFTERBEGIN);
    });

    this._totalPrice.removeElement();
    this._totalPrice = new TotalPrice(this._totalPriceValue);

    render(this._cart.getElement(), this._totalPrice.getElement(), Position.BEFOREEND);
  }

  _removeCartItem() {
    document.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`cart__item-remove`)) {
        this._store.removeItem(e.target.parentNode.id);
        this.renderCartItems();
      }
    });
  }
}
