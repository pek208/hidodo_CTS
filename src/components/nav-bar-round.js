class GlobalNavBar extends HTMLElement {
  connectedCallback() {
    let title = this.getAttribute("title");

    this.innerHTML = `
    <div class="global-nav-bar-new">
                <img src="src/assets/images/logo/hi_dodo_logo.svg" alt="" class="logo">
                <div class="menu">
                    <span>멤버십</span>
                    <span>이용안내</span>
                    <span>공지사항</span>
                </div>
                <div class="right-menu">
                    <span>로그인</span>
                    <span>회원가입</span>
                    <button class="app-downloda">앱 다운로드</button>
                </div>
            </div>`
    ;
  }
}

window.customElements.define("global-nav-round-bar", GlobalNavBar);
