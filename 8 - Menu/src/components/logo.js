class Logo extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }
  
  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
        :host {
      --color-nav-text: hsla(0, 0%, 100%, 1.00);
      --color-primary: hsl(210, 80%, 50%);
      --color-primary-hover: hsl(210, 80%, 40%);
      --color-shadow: hsl(0, 0%, 0%, 0.1);
      --color-white: hsl(0, 0%, 100%);
    }
      .logo {
      align-items: center;
      column-gap: 0.5rem;
      display: grid;
      grid-template-columns: 2rem auto;
      justify-content: start;
    }
 
    .logo svg {
      display: block;
      height: 2rem;
      width: 2rem;
    }
 
    .logo span {
      color: var(--color-nav-text);
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 1;
    }
    </style>

    <div class="logo">
            <svg width="32" height="32" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="var(--btn-bg-color)"></circle>
                <text x="20" y="26" text-anchor="middle" fill="var(--btn-text-color)" font-size="16" font-weight="bold">N</text>
            </svg>
            <span>Nombre</span>
        </div>
    `

  }
}

customElements.define('logo-component', Logo);