// import Swiper, { Navigation, Pagination } from 'swiper';
import { testWebP } from './modules/webPTest.js';
import showMenu from './modules/showMenu.js';

document.addEventListener('DOMContentLoaded', function () {
  testWebP(document.body);
  showMenu(".header__sub-cities-list", ".header__town-btn", ".header__icon-up", ".header__icon-down");
})