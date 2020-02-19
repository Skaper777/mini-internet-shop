import Cart from '../components/cart';
import CartItems from '../components/cart-items';
import CartItem from '../components/cart-item';
import TotalPrice from '../components/total-price';
import Store from '../cart-store';
import {
  render,
  Position
} from '../utils';
/**
 * Контроллер корзины
 */
export default class CartController {
  constructor(container) {
    this._container = container;
    this._cart = new Cart();
    this._cartItems = new CartItems();
    this._store = new Store();
    this._totalPrice = 0;
  }


  init() {
    render(this._container, this._cart.getElement(), Position.AFTERBEGIN);
    render(this._cart.getElement(), this._cartItems.getElement(), Position.AFTERBEGIN);

    this._renderCartItems();

    document.addEventListener(`click`, (e) => {
      e.stopPropagation();
      if (e.target.classList.contains(`good__cart-btn`)) {
        console.log(e.target.parentNode.parentNode.id)
      }
    })
  }


  _renderCartItems() {
    this._cartItems.removeElement();
    render(this._cart.getElement(), this._cartItems.getElement(), Position.AFTERBEGIN);

    const goods = this._store.getItems();

    goods.forEach((good) => {
      this._totalPrice += good.price;
      const cartItem = new CartItem(good);
      render(this._cartItems.getElement(), cartItem.getElement(), Position.AFTERBEGIN);
    });

    const totalPrice = new TotalPrice(this._totalPrice);
    render(this._cart.getElement(), totalPrice.getElement(), Position.BEFOREEND);
  }
}
