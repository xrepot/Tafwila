let navMenu = document.querySelector(".nav-menu");
let closeMenuBtn = document.querySelector(".close-menu");
let opanMenuBtn = document.querySelector(".menu-icon");
let linksContainer = document.querySelector(".ul-links");
let navLinks = document.querySelectorAll(".head .container .links ul li a");
let sections = document.querySelectorAll(".home, .categories, .menu");
let categories = document.getElementById('categories-items');
let foodPhoto = document.querySelectorAll('.food-photo');

// Open Menu
opanMenuBtn.addEventListener("click", () => {
  navMenu.classList.add("active-menu");
});

// Cloase Menu
closeMenuBtn.addEventListener("click", () => {
  navMenu.classList.remove("active-menu");
}); 

// Active Link On Click
// links.forEach((ele) => {
//   ele.addEventListener("click", (e) => {
//     links.forEach((ele) => {
//       ele.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//   });
// });
linksContainer.addEventListener('click', function (e) {
  const element = e.target;
  if (element.classList.contains('navLI')) {
    navLinks.forEach((nav) => {
      nav.classList.remove('active')
    })
    element.classList.add('active');
  }
})



// Active Link On Scroll
window.addEventListener("scroll", function () {
  sections.forEach(function (s) {
    if (window.scrollY >= s.offsetTop - 200) {
      navLinks.forEach((e) => {
        e.classList.remove("active");
        `#${s.id}` == e.getAttribute("href") ? e.classList.add("active") : "";
      });
    }
  });
});

// swipper js 
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
   centeredSlides: true,
   

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// make blur on categories images on scroll
const observerObject = {
  root: null,
  threshold: 0.7
}
const observerCallfun = function (entries) {
  const [entry] = entries;
  foodPhoto.forEach((photo) => {
    if (entry.isIntersecting) {
      photo.classList.remove('lazy')
    } else {
      photo.classList.add('lazy')
    }
  })

}
const headerObserver = new IntersectionObserver(observerCallfun, observerObject)

headerObserver.observe(categories)  

