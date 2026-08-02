export default class Header {
  constructor(el) {
    this.header = el;
    this.button = this.header.querySelector(".js-menu-button");
    this.menu = this.header.querySelector(".js-main-menu");

    if (!this.button || !this.menu) return;

    this.button.addEventListener("click", () => this.toggleMenu());

    this.init();

    window.addEventListener("resize", () => {
      window.requestAnimationFrame(() => this.init());
    });
  }

  init() {
    if (this.isDesktop()) {
      this.open();
    } else {
      this.close();
    }
  }

  isDesktop() {
    return window.matchMedia("(min-width: 48rem)").matches;
  }

  open() {
    this.menu.classList.remove("is-hidden");
    this.button.setAttribute("aria-expanded", "true");
  }

  close() {
    this.menu.classList.add("is-hidden");
    this.button.setAttribute("aria-expanded", "false");
  }

  toggleMenu() {
    const isOpen =
      this.button.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}
