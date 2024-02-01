let navMenu = document.querySelector(".nav-menu");
let closeMenuBtn = document.querySelector(".close-menu");
let opanMenuBtn = document.querySelector(".menu-icon");

// Open Menu
opanMenuBtn.addEventListener("click", () => {
  navMenu.classList.add("active-menu");
});

// Cloase Menu
closeMenuBtn.addEventListener("click", () => {
  navMenu.classList.remove("active-menu");
});
