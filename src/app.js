const menuButton = document.querySelector(".menu-button");

const handleMenuButtonPress = () => {
  console.log("Menu button pressed!");
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  menuIcon.classList.toggle("active");
  menu.classList.toggle("show");
};

const app = () => {
  menuButton.addEventListener("click", handleMenuButtonPress);
};

export default app;
