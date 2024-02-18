// Light Mode
let btnDark = document.querySelector(".head .btns .mode-icon");

if (localStorage.getItem("light")) {
  document.body.classList.add("light-theme");
  btnDark.classList.remove("uil-sun");
} else {
  document.body.classList.remove("light-theme");
  btnDark.classList.add("uil-moon");
}

btnDark.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  btnDark.classList.toggle("uil-sun");
  document.body.classList.contains("light-theme")
    ? localStorage.setItem("light", true)
    : localStorage.removeItem("light");
});
