class PurchaseListItem extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label");
    const productName = this.getAttribute("productName");
    const purchaseDate = this.getAttribute("purchaseDate");
    const pg = this.getAttribute("pg");
    const price = this.getAttribute("price");

    this.innerHTML = `
    <div class="purchase-list-item">
        <div class="col1">
            <div class="label">${label}</div>
            <div class="purchase-info">
                <div class="product-name">${productName}</div>
                <div class="group">
                    <span class="purchase-date">${purchaseDate}</span>
                    <span class="line"></span>
                    <span class="pg">${pg}</span>
                </div>
            </div>
        </div>
        <div class="col2">
            <div class="price">${price}원</div>
        </div>
    </div>`;
  }
}

window.customElements.define("purchase-list-item", PurchaseListItem);
