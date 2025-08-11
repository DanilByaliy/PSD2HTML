const swiper = new Swiper(".swiper", {
  slidesPerView: 2.31,
  initialSlide: 1,
  spaceBetween: 80,
  speed: 600,

  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    invert: false,
    thresholdDelta: 50,
    forceToAxis: true,
  },
});

list = document.querySelectorAll(".card__title-wrapper .card__title");

for (var i = 0; i < list.length; i++) {
  // retrieve width of span and apply it to parent
  w = list[i].offsetWidth;
  list[i].parentNode.style.width = w + 1 + "px";
}
