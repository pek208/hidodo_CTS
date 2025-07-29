class SlideContents extends HTMLElement {
  connectedCallback() {
    const imgSrc1 = this.getAttribute("imgSrc1");
    const imgSrc2 = this.getAttribute("imgSrc2");
    const txt = this.getAttribute("txt");

    this.innerHTML = `
    <div class="contents" style="background-image: url('${imgSrc1}');">
        <div class="center" style="background-image: url('${imgSrc2}');"></div>
        <div class="txt">${txt}</div>
    </div>`;
  }
}

window.customElements.define("slide-contents", SlideContents);
