class Header extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    
    <style>
      :root {
        --color-nav-text: hsla(0, 0%, 100%, 1.00);
        --color-primary: hsl(210, 80%, 50%);
        --color-primary-hover: hsl(210, 80%, 40%);
        --color-shadow: hsl(0, 0%, 0%, 0.1);
        --color-white: hsl(0, 0%, 100%);
      }
  
      * {
        box-sizing: border-box;
        margin: 0;
      }
  
      header {
        align-items: center;
        background-color: hsl(210, 80%, 50%);
        box-shadow: 0 0.125rem 0.5rem hsl(0, 0%, 0%, 0.1);
        column-gap: 2rem;
        display: grid;
        grid-template-columns: minmax(8rem, max-content) 1fr minmax(12rem, max-content);
        padding: 1rem 2rem;
      }
    </style>

    <header>
      <slot></slot>
    </header>
    `
  }
}

customElements.define('header-component', Header);
