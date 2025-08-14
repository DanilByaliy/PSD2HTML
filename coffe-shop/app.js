const welcomeSwiper = new Swiper(".welcome__swiper", {
  slidesPerView: 1,
  initialSlide: 1,
  speed: 600,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: {
    invert: false,
    thresholdDelta: 50,
    forceToAxis: true,
  },
});

const swiper = new Swiper(".cites__swiper", {
  slidesPerView: 1,
  speed: 1000,
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
