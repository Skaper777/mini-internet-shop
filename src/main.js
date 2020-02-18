import ShopController from './controllers/shop-controller';
import {goods} from './components/goodsList';

const mainContainer = document.getElementById(`app`); // Главный контейнер приложения

const shop = new ShopController(mainContainer, goods); // Создаём экземпляр контроллера магазина

shop.init(); // Инициализируем магазин
