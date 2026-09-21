const RECENT_CHATS = [
  'Como ganar la lotería',
  'Colores Vintage',
  'Como farmear Aura',
  'Regulación masiva',
  'Trucos GTA',
  'Oliva o aceituna?',
  'Calcular impuesto',
  'Edita foto con musculos',
  'Bajar de peso',
  'Preparar Shandy',
  'Tasa dolar a bs',
];

const PINNED_CHATS = [
  'Pagar menos impuesto Hacienda',
  'Tutorial para ser millonario',
];

const CHAT_ICON_PATH = 'M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 ' +
  '9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 ' +
  '2,13.13 2,11C2,6.58 6.5,3 12,3Z';

/**
 * Renders one <li> item for a chat list entry.
 * @param {string} label Chat title shown to the user.
 * @return {string} HTML markup for the list item.
 */
function renderChatItem(label) {
  return /* html */ `
    <li>
      <a href="#">
        <svg viewBox="0 0 24 24">
          <path d="${CHAT_ICON_PATH}"></path>
        </svg>
        <span class="label">${label}</span>
      </a>
    </li>
  `;
}

export class AppMenu extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
    this.bindToggle();
  }

  render() {
    this.shadow.innerHTML = /* html */ `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :host {
          display: block;
        }

        .app {
          display: grid;
          grid-template-columns: minmax(14rem, 18rem);
          min-height: 100vh;
          transition: grid-template-columns 0.3s;
        }

        .app--collapsed {
          grid-template-columns: 4.2rem;
        }

        .side-menu {
          background: hsl(40, 33%, 77%);
          border-right: 1px solid hsl(39, 21%, 58%);
          display: grid;
          gap: 1rem;
          grid-template-rows: auto auto auto 1fr auto;
          height: 100vh;
          overflow: hidden;
          padding: clamp(0.6rem, 2vw, 1rem);
          width: 100%;
        }

        .label {
          max-width: 12rem;
          opacity: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: max-width 0.2s, opacity 0.2s;
          white-space: nowrap;
        }

        .app--collapsed .label {
          max-width: 0;
          opacity: 0;
        }

        .side-menu-top {
          align-items: center;
          display: grid;
          gap: 0.5rem;
          grid-template-columns: 1fr auto;
        }

        .app--collapsed .side-menu-top {
          grid-template-columns: 1fr;
        }

        .brand {
          align-items: center;
          background: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
          display: flex;
          font: inherit;
          gap: 0.6rem;
          overflow: hidden;
          padding: 0.4rem;
          white-space: nowrap;
        }

        .brand:hover {
          background: hsl(40, 29%, 71%);
        }

        .brand__icon {
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

        .side-menu-section--grow {
          height: 400px;
          min-height: 0;
          overflow-y: scroll;
          scrollbar-color: hsl(39, 25%, 66%) hsl(39, 21%, 58%);
          scrollbar-width: thin;
        }

        .side-menu-section__title {
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

        .side-menu-user__info {
          overflow: hidden;
        }

        .side-menu-user__name {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .side-menu-user__plan {
          color: hsl(34, 17%, 39%);
          display: block;
          font-size: 0.75rem;
        }
      </style>

      <div class="app">
        <section class="side-menu">
          <div class="side-menu-top">
            <button class="brand" type="button" aria-label="Colapsar menú">
              <svg class="brand__icon" viewBox="0 0 24 24">
                <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.8 3.8v7.8L12 19.7l-6.8-3.8V8.1L12 4.3Z"></path>
              </svg>
              <span class="label">Sendo Beta</span>
            </button>
            <button class="icon-btn" type="button" aria-label="Buscar">
              <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l5 5L20.5 19l-5-5Zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"></path>
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
            <span class="side-menu-section__title label">Fijado</span>
            <ul>
              ${PINNED_CHATS.map(renderChatItem).join('')}
            </ul>
          </nav>

          <nav class="side-menu-section side-menu-section--grow">
            <span class="side-menu-section__title label">Recientes</span>
            <ul>
              ${RECENT_CHATS.map(renderChatItem).join('')}
            </ul>
          </nav>

          <div class="side-menu-user label">
            <div class="avatar">JO</div>
            <div class="side-menu-user__info">
              <span class="side-menu-user__name">Jhordy Orozco</span>
              <span class="side-menu-user__plan">Admin</span>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  /**
   * Wires the collapse/expand behaviour that used to live in pure CSS
   * (the hidden #toggle checkbox) into a plain click listener.
   */
  bindToggle() {
    const app = this.shadow.querySelector('.app');
    const toggleButton = this.shadow.querySelector('.brand');
    toggleButton.addEventListener('click', () => {
      app.classList.toggle('app--collapsed');
    });
  }
}

customElements.define('app-menu', AppMenu);
