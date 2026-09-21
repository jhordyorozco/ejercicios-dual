class Button extends HTMLElement {

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
        :root {
      --color-primary: hsl(210, 80%, 50%);
      --color-primary-hover: hsl(210, 80%, 40%);
      --color-white: hsl(0, 0%, 100%);
    }
      .btn-navbar {
      display: grid;
      gap: 1rem;
      grid-auto-flow: column;
      justify-content: end;
    }
 
    .btn-navbar .btn {
      background-color: var(--color-primary);
      border: none;
      border-radius: 0.5rem;
      color: var(--color-white);
      cursor: pointer;
      font-weight: bold;
      padding: 0.5rem 2rem;
      white-space: nowrap;
    }
 
    .btn-navbar .btn:hover {
      background-color: var(--color-primary-hover);
    }
    </style>

    <div class="btn-navbar">
        <button class="btn">Sign Up</button>
        <button class="btn">Log In</button>
    </div>
    `
  }
}

customElements.define('button-component', Button);