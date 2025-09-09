import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper(".slider-main__body", {
  grabCursor: true,
  allowTouchMove: true,
  // preloadImages: false,
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 32,
  watchOverflow: true,
  speed: 800,
  loop: true,
  loopAdditionalSlides: true,
  parallax: true,
  pagination: {
    el: ".controls-slider-main__dots",
    clickable: true,
  },
  navigation: {
    prevEl: ".slider-arrow_prev",
    nextEl: ".slider-arrow_next",
  },
  modules: [Navigation, Pagination],
});
