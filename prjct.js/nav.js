const burgerIcon = document.getElementById("burger-icon");
const menuList = document.getElementById("menu-list");

burgerIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
