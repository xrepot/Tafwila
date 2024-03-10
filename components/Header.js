const template = document.createElement("template");
template.innerHTML = `
<style>
:root {
  --main-color: #ff7900;
  --bg-color: #090909;
  --haeder-color: #101010;
  --box-color: #18191a;
  --input-color: #333434;
  --gray-color: #727272;
  --white-color: #fff;
  --padding-top: 100px;
  --padding-bottom: 100px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--white-color);
  font-family: "Cairo", sans-serif;
}
a {
  text-decoration: none;
}
li {
  list-style: none ;
}
body {
  background-color: var(--bg-color);
}
.container {
  width: 90vw;
  margin: auto;
}
.head {
  position: fixed;
  z-index: 99999;
  width: 100vw;
  background-color: var(--header-color);
  backdrop-filter: blur(14px);
}
.head .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}
.head .container .logo a {
  height: 56px;
}
.head .container .logo img {
  width: 180px;
}
.head .container .links .ul-links {
  display: flex;
  gap: 35px;
}
.head .container .links .ul-links li a {
  font-size: 25px;
  font-weight: 500;
  position: relative;
  transition: 0.3s;
}
.head .container .links .ul-links li a:hover {
  color: var(--main-color);
}
.head .container .links .ul-links li a.active::before {
  content: "";
  width: 100%;
  height: 15px;
  position: absolute;
  top: -30px;
  border-radius: 12px;
  transition: 0.3s;
  background-color: var(--main-color);
  box-shadow: 0px 0px 10px var(--main-color);
}
.head .container .links .ul-links li a.active:hover::before {
  transform: scaleX(1.1);
}
.head .container .btns {
  display: flex;
  gap: 10px;
  cursor: pointer;
  flex-direction: row-reverse;
}
.head .container .btns i,
.head .container .btns slot {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border-radius: 6px;
  transition: 0.3s;
  background-color: var(--main-color);
}
.head .container .btns i:hover,
.head .container .btns slot:hover {
  filter: brightness(90%);
  border-radius: 50%;
}
.head .container .btns slot i {
  position: relative;
  display: none;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}
.head .container .btns slot i::after {
  content: "";
  position: absolute;
  right: -10px;
  top: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid var(--bg-color);
  background-color: #ff7900;
}
.head .container .logo slot {
  display: none !important;
  align-items: center !important;
  justify-content: center !important;
  color: #fff !important;
  cursor: pointer !important;
  font-size: 35px !important;
  padding: 1px !important;
  margin-bottom: 5px !important;
  width: 40px !important;
  height: 40px !important;
  transition: 0.3s !important;
  border-radius: 10px !important;
  background-color: var(--main-color) !important;
}
.head .container .logo slot:hover,
.menu .container .menu-items .items .img-box .product-info {
  filter: brightness(90%);
}
.head .container .logo slot i {
  transform: scaleX(0.8);
  margin-bottom: 2px;
}
@media (max-width: 900px) {
  .head .container .links {
    display: none;
  }
  .head .container .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .head .container .logo slot {
    display: flex !important;
  }
}
</style>
<head>
  <link
    href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
    rel="stylesheet"
  />
</head>
<div class="head">
<div class="container">
<div class="logo">
  <slot name="menu-icon">
  </slot>
  <a href="index.html">
    <img alt="logo" src="imgs/logo.png" />
  </a>
</div>
<div class="links">
  <ul class="ul-links">
    <li>
      <a class="active navLI" href="index.html"> الرئيسية </a>
    </li>
    <li>
      <a class="navLI" href="index.html#categories"> الاقسام </a>
    </li>
    <li>
      <a class="navLI" href="index.html#menu"> المنيو </a>
    </li>
    <li>
      <a class="navLI" href="index.html#testimonial"> الاراء </a>
    </li>
    <li>
      <a class="navLI" href="contact.html"> تواصل معنا </a>
    </li>
  </ul>
</div>
<div class="btns">
  <a href="login.html"><i class="uil uil-user"></i></a>
  <slot name="cart-icon-link">
  </slot>
</div>
</div></div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({
      mode: "closed",
    });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);

    // Hedaer JS
    const closeMenuBtn = document.querySelector(".close-menu");
    const opanMenuBtn = document.querySelector("large-header .menu-icon");
    let navMenu = document.querySelector(".nav-menu");

    opanMenuBtn.addEventListener("click", () => {
      navMenu.classList.add("active-menu");
    });
    closeMenuBtn.addEventListener("click", () => {
      navMenu.classList.remove("active-menu");
    });
  }
}
customElements.define("large-header", Header);
