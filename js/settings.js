const asideSettingNav = document.querySelector(
  ".settings_modal .settings-list"
);

asideSettingNav.addEventListener("click", function (e) {
  const targetEl = e.target;
  if (targetEl.classList.contains("setting-item-list")) {
    document.body
      .querySelectorAll(".setting-item-list")
      .forEach((el) => el.classList.remove("settings-active"));
    targetEl.classList.add("settings-active");
    document.body
      .querySelectorAll(".settings_general .profile-container")
      .forEach((el) => el.classList.add("hidden"));
    document
      .querySelector(`.settings_general .${targetEl.dataset.name}`)
      .classList.remove("hidden");
      
  } else {
    return;
  }
});
