import ShopController from './controllers/shop-controller';
import Store from './cart-store';
import {goods} from './components/goodsList';

const store = new Store();
const mainContainer = document.getElementById(`app`); // Главный контейнер приложения
const shop = new ShopController(mainContainer, goods, store); // Создаём экземпляр контроллера магазина

shop.init(); // Инициализируем магазин


