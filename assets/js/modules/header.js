export default class Header {
  constructor(el) {
    this.header = el;
    this.button = this.header.querySelector(".js-menu-button");
    this.menu = this.header.querySelector(".js-main-menu");

    if (!this.button || !this.menu) return;

    this.button.addEventListener("click", () => this.toggleMenu());
    this.init();
    window.addEventListener( 'resize', () => {
      window.requestAnimationFrame(() => this.init())
    });
  }

  init() {
    // NOTE: your helper returns 'desktop'/'tablet'/'BigMobile'/'mobile'
    if(this.breakpoint() === 'mobile') {
      this.close();
    } else {
      this.open();
    }
  }

  //TODO: exclude to separate Helper module
  breakpoint() {
    const mqDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const mqTablet = window.matchMedia("(min-width: 608px)").matches;
    const mqMobile = window.matchMedia("(min-width: 320px)").matches;

    if (mqDesktop) return "desktop";
    if (mqTablet) return "tablet";
    if (mqMobile) return "mobile";
    return "mobile";
  }

  open() {
    this.menu.classList.remove('is-hidden');
    this.button.setAttribute('aria-expanded', 'true');
  }

  close() {
    this.menu.classList.add('is-hidden');
    this.button.setAttribute('aria-expanded', 'false');
  }

  toggleMenu() {
    const isOpen = this.button.getAttribute("aria-expanded") === "true";
    isOpen ? this.close() : this.open();
  }
}
