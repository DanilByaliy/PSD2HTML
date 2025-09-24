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

// Show more
const showMoreButton = document.querySelector(".products__more");
showMoreButton.addEventListener("click", (event) => {
  event.preventDefault();
  getProducts(event.target);
});

const getProducts = async (button) => {
  if (button.classList.contains("_hold")) {
    return;
  }
  button.classList.add("_hold");
  const fileName = "src/json/products.json";
  const response = await fetch(fileName, {
    method: "GET",
  });

  if (!response.ok) {
    return alert("Error occured");
  }

  const data = await response.json();

  loadProducts(data);
  button.classList.remove("_hold");
  button.remove();
};

const loadProducts = (data) => {
  const productsItems = document.querySelector(".products__items");

  data.products.forEach((product) => {
    const {
      id,
      url,
      image,
      title,
      text,
      price,
      priceOld,
      shareUrl,
      likeUrl,
      labels,
    } = product;

    const labelsTemplate = !labels.length
      ? ""
      : labels
          .map(
            (
              label,
            ) => `<div class="item-product__label item-product__label--${label.type}">
                    ${label.value}
                  </div>`,
          )
          .join("\n");

    const oldPriceTemplate = !priceOld
      ? ""
      : `<div class="item-product__price--old">
                          Rp. ${priceOld}
                        </div>`;

    let template = `<article data-pid="${id}" class="products__item item-product">
                <div class="item-product__labels">
                  ${labelsTemplate}
                </div>
                <a href="${url}" class="item-product__image _ibg">
                  <img src="img/products/${image}" alt="${title}" />
                </a>
                <div class="item-product__body">
                  <div class="item-product__content">
                    <h5 class="item-product__title">${title}</h5>
                    <p class="item-product__text">${text}</p>
                  </div>
                  <div class="item-product__prices">
                    <div class="item-product__price">Rp. ${price}</div>
                    ${oldPriceTemplate}
                  </div>
                  <div class="item-product__actions actions-product">
                    <div class="actions-product__body">
                      <a
                        href=""
                        class="actions-product__button button button--white"
                        >Add to cart</a
                      >
                      <a href="${shareUrl}" class="actions-product__link _icon-share"
                        >Share</a
                      >
                      <a href="${likeUrl}" class="actions-product__link _icon-like"
                        >Like</a
                      >
                    </div>
                  </div>
                </div>
              </article>`;

    productsItems.insertAdjacentHTML("beforeend", template);
  });
};
