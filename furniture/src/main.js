import "./style.scss";
import "./scripts/spoilers";
import "./scripts/burger-menu";
import "./scripts/swiper";
import { isMobile } from "./scripts/utils";
import { useDynamicAdapt } from "./scripts/dynamic-adapt.js";

useDynamicAdapt();

// Sub menu
const subMenuTriggers = document.querySelectorAll(".menu__arrow");

const openSubMenuHandler = (e) => {
  const targetElement = e.target;
  if (window.innerWidth > 768 && isMobile.any()) {
    targetElement.closest(".menu__item").classList.toggle("_hover");
  }
};

subMenuTriggers.forEach((trigger) => {
  trigger.addEventListener("click", openSubMenuHandler);
});

// Search form
const searchFormTrigger = document.querySelector(".search-form__icon");
searchFormTrigger.addEventListener("click", (e) => {
  document.querySelector(".search-form").classList.toggle("_active");
});

// Close element handler
document.addEventListener("click", (e) => {
  const target = e.target;

  const openedSubMenus = document.querySelectorAll(".menu__item._hover");
  if (window.innerWidth > 768 && isMobile.any()) {
    if (!target.closest(".menu__item") && openedSubMenus.length > 0) {
      openedSubMenus.forEach((menu) => menu.classList.remove("_hover"));
    }
  }

  if (
    !target.closest(".search-form") &&
    document.querySelector(".search-form._active")
  ) {
    document.querySelector(".search-form").classList.remove("_active");
  }
});

//  Header

const headerElement = document.querySelector(".header");

const callback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    headerElement.classList.remove("_scroll");
  } else {
    headerElement.classList.add("_scroll");
  }
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);
