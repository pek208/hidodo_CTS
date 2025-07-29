class FloatingIcon extends HTMLElement {
  connectedCallback() {
    let title = this.getAttribute("title");

    this.innerHTML = `
    <div class="floating-icon">
      <!-- 카카오상담 -->
      <a href="#"><img src="/src/assets/images/icons/fixed-bo-kakao.svg" alt=""></a>
      <!-- 탑으로 이동하기 -->
      <a href="#"><img src="/src/assets/images/icons/fixed-bo-top.svg" alt=""></a>
    </div>`;
  }
}

window.customElements.define("floating-icon", FloatingIcon);
