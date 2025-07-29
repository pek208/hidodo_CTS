class RefundListItem extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute("label");
    const productName = this.getAttribute("productName");
    const price = this.getAttribute("price");
    const refundDate = this.getAttribute("refundDate");
    const refundPrice = this.getAttribute("refundPrice");
    const unsubscribe = this.getAttribute("unsubscribe");

    this.innerHTML = `
    <div class="refund-list-item">
        <div class="col1">
            <div class="label">${label}</div>
            <div class="refund-info">
                <div class="product-name">${productName}<span>(${price}원)</span></div>
                <div class="group">
                  <span class="refund-date">신청일</span>
                  <span class="refund-date">${refundDate}</span>
                </div>
            </div>
        </div>
        <div class="col2">
            <div class=${
              refundPrice ? "refund" : "d-none"
            }>${refundPrice}원</div>
            <div class=${
              unsubscribe ? "refund" : "d-none"
            }>${unsubscribe} 해지완료</div>
        </div>
    </div>`;
  }
}

window.customElements.define("refund-list-item", RefundListItem);
