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
