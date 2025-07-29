class GlobalNavmoBar extends HTMLElement {
  connectedCallback() {
    let title = this.getAttribute("title");

    this.innerHTML = `
    <div class="global-nav-round-bar-mo">
                <img src="/src/assets/images/logo/hi_dodo_logo.svg" alt="" class="logo">
                <img src="/src/assets/images/new-main2/mo-menu.svg" alt="">
            </div>`
    ;
  }
}

window.customElements.define("global-nav-round-bar-mo", GlobalNavmoBar);
