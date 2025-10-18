import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./scss/styles.scss";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { useDynamicAdapt } from "./tools/dynamic-adapt.js";

useDynamicAdapt();

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");

function toggleBurger() {
  burger.addEventListener("click", function () {
    burger.classList.toggle("header__burger--active");
    menu.classList.toggle("header__menu--active");
    document.body.classList.toggle("body--lock");
  });
}

toggleBurger();

window.addEventListener("DOMContentLoaded", () => {
  const swiperWrapper = document.querySelector(".gallery__wrapper");

  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback,
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        swiperWrapper.classList.add("swiper-wrapper");
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        swiperWrapper.classList.remove("swiper-wrapper");
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    "(max-width: 767px)",
    ".gallery__slider",
    {
      loop: true,
      spaceBetween: 20,
      // slidesPerView: 3,
      slidesPerView: "auto",
      speed: 1000,
      initialSlide: 1,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: {
        invert: false,
        thresholdDelta: 30,
        forceToAxis: true,
      },
      modules: [Navigation, Pagination],
    },
    someFunc,
  );
});
