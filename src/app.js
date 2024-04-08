import addProfiles from "./modules/profiles";

const menuButton = document.querySelector(".menu-button");

const handleMenuButtonPress = () => {
  console.log("Menu button pressed!");
  const menuButton = document.querySelector(".menu-button");
  const menuIcon = document.querySelector(".menu-icon");
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu-item");
  const transitionDuration = 100;

  if (!menu.classList.contains("show")) {
    console.log("Show menu");
    menuButton.classList.toggle("active");
    menuIcon.classList.toggle("active");
    overlay.classList.toggle("show");
    menu.classList.toggle("show");
  } else {
    setTimeout(() => {
      console.log("Hide menu");
      overlay.classList.toggle("show");
      menu.classList.toggle("show");
      menuButton.classList.toggle("active");
      menuIcon.classList.toggle("active");
    }, menuItems.length * transitionDuration);
  }

  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.toggle("show");
    }, index * transitionDuration);
  });
};

const app = () => {
  addProfiles(document.getElementById("content"));
  menuButton.addEventListener("click", handleMenuButtonPress);
};

export default app;
