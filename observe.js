 let categories = document.getElementById('categories-items');
 let foodPhoto = document.querySelectorAll('.food-photo');
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
