let navMenu = document.querySelector(".nav-menu");
let closeMenuBtn = document.querySelector(".close-menu");
let opanMenuBtn = document.querySelector(".menu-icon");
let linksContainer = document.querySelector(".ul-links");
let navLinks = document.querySelectorAll(".head .container .links ul li a");
let sections = document.querySelectorAll(".home, .categories, .menu");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotsContainer = document.querySelector(".dotsSlider");
let categories = document.getElementById("categories-items");
let foodPhoto = document.querySelectorAll(".food-photo");

// // Open Menu
// opanMenuBtn.addEventListener("click", () => {
//   navMenu.classList.add("active-menu");
// });

// // Cloase Menu
// closeMenuBtn.addEventListener("click", () => {
//   navMenu.classList.remove("active-menu");
// });

// Actice link on click
// linksContainer.addEventListener("click", function (e) {
//   const element = e.target;
//   if (element.classList.contains("navLI")) {
//     navLinks.forEach((nav) => {
//       nav.classList.remove("active");
//     });
//     element.classList.add("active");
//   }
// });

// Active Link On Scroll
// window.addEventListener("scroll", function () {

// });

// building slider
let currentSlide = 0;
let maxSlide = slides.length;

// creating Dots element
const createDots = function () {
  slides.forEach(function (_, i) {
    let html = `<button class="dots__dot" data-slide=${i}></button>`;
    dotsContainer.insertAdjacentHTML("beforeend", html);
  });
};
createDots();

const activeDots = function (dot) {
  document.querySelectorAll(".dots__dot").forEach((dotElement) => {
    dotElement.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`.dots__dot[data-slide="${dot}"]`)
    .classList.add("dots__dot--active");
};

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    activeDots(slide);
    goToSlide(slide);
  }
});

const goToSlide = function (currentSlide) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
  activeDots(currentSlide);
};
goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

btnRight.addEventListener("click", prevSlide);
btnLeft.addEventListener("click", nextSlide);

// moving slide with keybord event
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    prevSlide();
  } else if (e.key === "ArrowLeft") {
    nextSlide();
  }
});

// make blur on categories images on scroll
const observerObject = {
  root: null,
  threshold: 0.7,
};
const observerCallfun = function (entries) {
  const [entry] = entries;
  foodPhoto.forEach((photo) => {
    if (entry.isIntersecting) {
      photo.classList.remove("lazy");
    } else {
      photo.classList.add("lazy");
    }
  });
};
const headerObserver = new IntersectionObserver(
  observerCallfun,
  observerObject
);

headerObserver.observe(categories);
