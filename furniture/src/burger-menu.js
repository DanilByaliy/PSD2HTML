// Menu burger
const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

menuIcon.addEventListener("click", () => {
  document.body.classList.toggle("_lock");
  menuIcon.classList.toggle("_active");
  menuBody.classList.toggle("_active");
});
