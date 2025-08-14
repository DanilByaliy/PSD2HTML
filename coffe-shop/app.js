const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
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
