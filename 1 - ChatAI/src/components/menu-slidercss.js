class MenuSliderCss extends HTMLElement {

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
    display: block;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.app {
    display: grid;
    grid-template-columns: minmax(14rem, 18rem);
    min-height: 100vh;
    transition: grid-template-columns 0.3s;
}

.side-menu {
    background: #d8cbb2;
    border-right: 1px solid #a8997d;
    display: grid;
    grid-template-rows: auto auto auto 1fr auto;
    gap: 1rem;
    height: 100vh;
    overflow: hidden;
    padding: clamp(0.6rem, 2vw, 1rem);
    width: 100%;
}

#toggle:checked~.app {
    grid-template-columns: 4.2rem;
} 

.label {
    max-width: 12rem;
    opacity: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity 0.2s, max-width 0.2s;
    white-space: nowrap;
}

#toggle:checked~.app .label {
    max-width: 0;
    opacity: 0;
}

.side-menu-top {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
}


#toggle:checked~.app .side-menu-top {
    grid-template-columns: 1fr;
}

.brand {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 0.6rem;
    overflow: hidden;
    padding: 0.4rem;
    white-space: nowrap;
}

.brand:hover {
    background: hsl(40, 29%, 71%);
}

.brand-icon {
    fill: none;
    flex-shrink: 0;
    height: 1.5rem;
    stroke: currentColor;
    stroke-width: 1.5;
    width: 1.5rem;
}

.icon-btn {
    align-items: center;
    background: transparent;
    border: none;
    border-radius: 0.4rem;
    color: inherit;
    cursor: pointer;
    display: grid;
    height: 2.3rem;
    justify-items: center;
    width: 2.3rem;
}

.icon-btn:hover {
    background: hsl(40, 29%, 71%);
}

.icon-btn svg {
    fill: none;
    height: 1.2rem;
    stroke: currentColor;
    stroke-width: 1.7;
    width: 1.2rem;
}

.new-chat {
    align-items: center;
    background: hsl(39, 30%, 70%);
    border: 1px solid hsl(39, 21%, 58%);
    border-radius: 0.4rem;
    color: inherit;
    display: flex;
    gap: 0.6rem;
    overflow: hidden;
    padding: 0.7rem;
    text-decoration: none;
    white-space: nowrap;
}

.new-chat:hover {
    background: hsl(39, 25%, 66%);
}

.new-chat svg {
    fill: none;
    flex-shrink: 0;
    height: 1.2rem;
    stroke: currentColor;
    stroke-width: 2;
    width: 1.2rem;
}

.side-menu-section {
    overflow: hidden;
}

.side-menu-section-grow {
    min-height: 0;
    height: 400px;
    overflow-y: scroll;
    scrollbar-color: hsl(39, 25%, 66%) hsl(39, 21%, 58%);
    scrollbar-width: thin;
}

.side-menu-section-title {
    color: hsl(34, 17%, 39%);
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
    padding: 0.3rem;
}

.side-menu-section ul {
    display: grid;
    gap: 0.2rem;
    list-style: none;
}

.side-menu-section a {
    align-items: center;
    border-radius: 0.4rem;
    color: inherit;
    display: flex;
    gap: 0.6rem;
    overflow: hidden;
    padding: 0.6rem;
    text-decoration: none;
    white-space: nowrap;
}

.side-menu-section a:hover {
    background: hsl(40, 29%, 71%);
}

.side-menu-section a svg {
    fill: none;
    flex-shrink: 0;
    height: 1.1rem;
    stroke: currentColor;
    stroke-width: 1.5;
    width: 1.1rem;
}

.side-menu-user {
    align-items: center;
    border-top: 1px solid hsl(39, 21%, 58%);
    display: flex;
    gap: 0.6rem;
    overflow: hidden;
    padding: 0.7rem 0.3rem;
}

.avatar {
    align-items: center;
    background: hsl(36, 24%, 44%);
    border-radius: 50%;
    color: hsl(0, 0%, 100%);
    display: grid;
    flex-shrink: 0;
    font-size: 0.7rem;
    font-weight: bold;
    height: 2rem;
    justify-items: center;
    width: 2rem;
}

.side-menu-user-info {
    overflow: hidden;
}

.side-menu-user-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.side-menu-user-plan {
    color: hsl(34, 17%, 39%);
    font-size: 0.75rem;
}
    </style>

    <input type="checkbox" id="toggle" hidden>

  <div class="app">
    <section class="sidebar-section">
      <aside class="side-menu">
        <div class="side-menu-top">

          <label for="toggle" class="brand">
            <svg class="brand-icon" viewBox="0 0 24 24">
              <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.8 3.8v7.8L12 19.7l-6.8-3.8V8.1L12 4.3Z">
              </path>
            </svg>
            <span class="label">Sendo Beta</span>
          </label>
          <button class="icon-btn search-btn">
            <svg viewBox="0 0 24 24">
              <path
                d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l5 5L20.5 19l-5-5Zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z">
              </path>
            </svg>
          </button>
        </div>

        <a href="#" class="new-chat">
          <svg viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14"></path>
          </svg>
          <span class="label">Nuevo chat</span>
        </a>

        <nav class="side-menu-section">
          <p class="side-menu-section-title label">
            Fijado
          </p>
          <ul>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>pin</title>
                  <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
                </svg>
                <span class="label">
                  Pagar menos impuesto Hacienda
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>pin</title>
                  <path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" />
                </svg>
                <span class="label">
                  Tutorial para ser millonario
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <nav class="side-menu-section side-menu-section-grow">

          <p class="side-menu-section-title label">
            Recientes
          </p>

          <ul>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Como ganar la lotería</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Colores Vintage</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Como farmear Aura</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Regulación masiva</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Trucos GTA</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Hackear Wifi</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Oliva o aceituna?</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Calcular impuesto</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Edita foto con musculos</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Bajar de peso</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Preparar Shandy</span>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chat</title>
                  <path
                    d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z" />
                </svg>
                <span class="label">Tasa dolar a bs</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="side-menu-user label">

          <div class="avatar">
            JO
          </div>
          <div class="side-menu-user-info">
            <p class="side-menu-user-name">
              Jhordy Orozco
            </p>
            <p class="side-menu-user-plan">
              Admin
            </p>
          </div>
        </div>
      </aside>
    </section>
    `
  }
}

customElements.define('menu-slidercss', MenuSliderCss);