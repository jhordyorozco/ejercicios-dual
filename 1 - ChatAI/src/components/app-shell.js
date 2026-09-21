class AppShell extends HTMLElement {

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
    --color-bg: hsl(41, 38%, 85%);
    --color-text: hsl(33, 17%, 20%);
}

* {
    box-sizing: border-box;
    margin: 0;
}

:host {
    background: var(--color-bg);
    color: var(--color-text);
    display: grid;
    font-family: 'Times New Roman', Times, serif;
    grid-template-columns: auto 1fr;
    min-height: 100vh;
}
    </style>

    <slot name="menu"></slot>
    <slot name="content"></slot>
    `
  }
}

customElements.define('app-shell', AppShell);