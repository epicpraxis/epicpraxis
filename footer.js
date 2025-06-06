class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer-section">
                <div class="wave-container">
                <svg class="animated-wave" viewBox="0 0 1440 550" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#a)" fill-rule="evenodd" 
                        d="M150.27 47.5737C193.348 22.7412 232.798 0 326 0c85.212 0 136.638 25.2659 188.387 50.6903
                        C566.789 76.4355 619.521 102.343 708 102.343c87.067 0 127.536-25.0869 168.402-50.4196C918.076 26.0895 960.163 0 1052.5 0
                        c11.88 0 22.91.854988 33.21 2.4292 79.05 6.97203 127.99 31.5264 173.86 54.5467 46.8 23.4817 90.42 45.3671 159.57 45.3671 87.07 0 137.19-25.0869 187.79-50.4196
                        C1658.54 26.0895 1710.66 0 1803 0c83.39 0 140.12 27.5507 195.88 54.6344C2065.4 86.9456 2130.56 118.592 2238 102
                        v448H0V102.343c75.3304-11.5702 114.08-33.9078 150.27-54.7693Z" clip-rule="evenodd"/>
                        <defs><linearGradient id="a" x1="0" x2="2238" y1="275" y2="275" gradientUnits="userSpaceOnUse"><stop stop-color="#3182F6"/>
                        <stop offset=".25" stop-color="#7934FC"/>
                        <stop offset=".75" stop-color="#7934FC"/>
                        <stop offset="1" stop-color="#3182F6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="footer-wrapper">
                    <div class="footer-desktop">
                        <span class="footer-desktop">© 2025 Epic Praxis Inc.</span>
                        <span class="footer-desktop">대표이사 <span class="bold">성찬영</span></span>
                        <span class="footer-desktop">사업자등록번호 <span class="bold">601-97-56044</span></span>
                        <span class="footer-desktop">문의 <span class="bold"><a href="mailto:hello@epicpraxis.com">hello@epicpraxis.com</a></span></span>
                        <span class="footer-desktop bold"><a href="terms.html">이용약관</a></span>
                        <span class="footer-desktop bold"><a href="privacy.html">개인정보처리방침</a></span>
                        <span class="footer-desktop"><a href="#">Epic Praxis Brands</a></span>
                    </div>
                    <div class="footer-mobile">
                        <div class="footer-mobile-text">
                            <span>대표이사 <span class="bold">성찬영</span></span>
                            <span>사업자등록번호 <span class="bold">601-97-56044</span></span>
                            <span>문의 <span class="bold"><a href="mailto:hello@epicpraxis.com">hello@epicpraxis.com</a></span></span>
                        </div>
                        <div class="footer-mobile-links">
                            <span>© 2025 Epic Praxis Inc.</span>
                            <span class="bold"><a href="terms.html">이용약관</a></span>
                            <span class="bold"><a href="privacy.html">개인정보처리방침</a></span>
                            <span><a href="#">Epic Praxis Brands</a></span>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer); 