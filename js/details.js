const starsContainer = document.querySelector(".starsIcons");
starsContainer.addEventListener("click", function (e) {
  const targetItem = e.target.closest(".starIcon");
  if (!targetItem) return;
  console.log(targetItem);
  targetItem.classList.toggle("checked");
  console.log(targetItem);
  targetItem.classList.contains("checked")
    ? (targetItem.style.fill = "#ff7900")
    : (targetItem.style.fill = "white");
  const count = document.querySelectorAll(".checked").length;
  console.log(count);
});
