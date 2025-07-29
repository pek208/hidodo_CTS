class PriceInfo02 extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute("title");
    const price1 = this.getAttribute("price1");
    const price2 = this.getAttribute("price2");
    const badgeTxt = this.getAttribute("badgeTxt");


    this.innerHTML = `
    <div class="price-info02">
      <div class="title">${title}</div>
      <div class="group">
        <div class="txt-price1">${price1}원</div>
      </div>
      
    </div>`;
  }
}

window.customElements.define("price-info02", PriceInfo02);
