import ShopController from './controllers/shop-controller';
import CartController from './controllers/cart-controller';
import {goods} from './components/goodsList';

const mainContainer = document.getElementById(`app`); // Главный контейнер приложения

const shop = new ShopController(mainContainer, goods); // Создаём экземпляр контроллера магазина
const cart = new CartController(mainContainer);

shop.init(); // Инициализируем магазин
cart.init();

