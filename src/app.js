const menuButton = document.querySelector(".menu-button");

const handleMenuButton = () => {
  console.log("Menu button pressed!");
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("active");
};

const app = () => {
  menuButton.addEventListener("click", handleMenuButton);
};

export default app;
