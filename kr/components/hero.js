class Hero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const image = this.getAttribute('image') || '';
        const title = this.getAttribute('title') || '';
        const subtitle = this.getAttribute('subtitle') || '';
        const buttonText = this.getAttribute('button-text') || '';
        const buttonLink = this.getAttribute('button-link') || '#';

        this.innerHTML = `
            <section class="hero">
                ${image ? `<img src="${image}" alt="Hero Image" class="hero-image">` : ''}
                <div class="hero-content">
                    <h1>${title}</h1>
                    ${subtitle ? `<h2>${subtitle}</h2>` : ''}
                </div>
            </section>
        `;
    }
}

customElements.define('hero-component', Hero); 