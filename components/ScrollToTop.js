const template = document.createElement("template");
template.innerHTML = `
<head>
  <link
    href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
    rel="stylesheet"
  />
</head>
<slot name="scroll-up" class="scrollup" id="scroll-up"
      ></slot>
`;

class ScrollToTop extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({
      mode: "closed",
    });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);

    // Scroll to top JS
    const toTop = document.querySelector("scroll-up i");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) toTop.classList.add("show-scroll");
      else toTop.classList.remove("show-scroll");
    });
    toTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}
customElements.define("scroll-up", ScrollToTop);
