let navMenu = document.querySelector(".nav-menu");
let closeMenuBtn = document.querySelector(".close-menu");
let opanMenuBtn = document.querySelector(".menu-icon");
let links = document.querySelectorAll(".head .container .links ul li a");
let sections = document.querySelectorAll(".home, .categories, .menu");

// Open Menu
opanMenuBtn.addEventListener("click", () => {
  navMenu.classList.add("active-menu");
});

// Cloase Menu
closeMenuBtn.addEventListener("click", () => {
  navMenu.classList.remove("active-menu");
});

// Active Link On Click
links.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// Active Link On Scroll
window.addEventListener("scroll", function () {
  sections.forEach(function (s) {
    if (window.scrollY >= s.offsetTop - 200) {
      links.forEach((e) => {
        e.classList.remove("active");
        `#${s.id}` == e.getAttribute("href") ? e.classList.add("active") : "";
      });
    }
  });
});

console.log(Array.from(links));
