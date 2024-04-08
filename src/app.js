const menuButton = document.querySelector(".menu-button");

const handleMenuButtonPress = () => {
  console.log("Menu button pressed!");
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("active");
  handleMenuItemAnimation();
};

const handleMenuItemAnimation = () => {
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu-item");
  const transitionDuration = 100;

  if (!menu.classList.contains("show")) {
    console.log("Show menu");
    overlay.classList.toggle("show");
    menu.classList.toggle("show");
  } else {
    setTimeout(() => {
      console.log("Hide menu");
      overlay.classList.toggle("show");
      menu.classList.toggle("show");
    }, menuItems.length * transitionDuration);
  }

  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.toggle("show");
    }, index * transitionDuration);
  });
};

const app = () => {
  menuButton.addEventListener("click", handleMenuButtonPress);
};

export default app;
