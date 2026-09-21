class Menu extends HTMLElement {

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
    }
        ul {
      display: grid;
      gap: 2rem;
      grid-auto-flow: column;
      justify-content: center;
    }
 
    ul li {
      list-style: none;
    }
 
    ul li a {
      color: var(--color-nav-text);
      font-weight: bold;
      padding: 0.3rem 0.2rem;
      text-decoration: none;
      transition: border-color 0.2s ease;
      white-space: nowrap;
    }
 
    ul li a:hover {
      border-bottom: 0.125rem solid var(--color-nav-text);
    }
    
    </style>

        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">View</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Locate</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    `
    }
}

customElements.define('menu-component', Menu);