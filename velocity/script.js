// Tabs
const buttons = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

const hideTabs = () => {
  tabsItems.forEach((item) => item.classList.add("hide"));
  buttons.forEach((item) => item.classList.remove("active"));
};

const showTab = (index) => {
  tabsItems[index].classList.remove("hide");
  buttons[index].classList.add("active");
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    hideTabs();
    showTab(index);
  });
});

hideTabs();
showTab(0);

// Anchors
const anchors = document.querySelectorAll(".header__nav a");
console.log(anchors);

anchors.forEach((anc) => {
  anc.addEventListener("click", function (event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 80,
      behavior: "smooth",
    });
  });
});
