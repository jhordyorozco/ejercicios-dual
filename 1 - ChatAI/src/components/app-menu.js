/**
 * @fileoverview Componente <app-menu>: menú lateral colapsable. El listado
 * de chats vive en el componente <chat-history>; este componente solo se
 * encarga del shell (marca, buscar, nuevo chat, usuario) y de propagar el
 * estado colapsado.
 */

import './chat-history.js';

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
        }

        :host {
          display: block;
        }

        :host([collapsed]) .app {
          grid-template-columns: 4.2rem;
        }

        :host([collapsed]) .side-menu__label {
          max-width: 0;
          opacity: 0;
        }

        :host([collapsed]) .side-menu__top {
          grid-template-columns: 1fr;
        }

        .app {
          display: grid;
          grid-template-columns: minmax(14rem, 18rem);
          min-height: 100vh;
          transition: grid-template-columns 0.3s;
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

        .side-menu__top {
          align-items: center;
          display: grid;
          gap: 0.5rem;
          grid-template-columns: 1fr auto;
        }

        .side-menu__history {
          min-height: 0;
          overflow: hidden;
        }

        .side-menu__user {
          align-items: center;
          border-top: 1px solid hsl(39, 21%, 58%);
          display: flex;
          gap: 0.6rem;
          overflow: hidden;
          padding: 0.7rem 0.3rem;
        }

        .side-menu__user-info {
          overflow: hidden;
        }

        .side-menu__user-name {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .side-menu__user-plan {
          color: hsl(34, 17%, 39%);
          display: block;
          font-size: 0.75rem;
        }

        .side-menu__label {
          max-width: 12rem;
          opacity: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: max-width 0.2s, opacity 0.2s;
          white-space: nowrap;
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

        .icon-btn__icon {
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

        .new-chat__icon {
          fill: none;
          flex-shrink: 0;
          height: 1.2rem;
          stroke: currentColor;
          stroke-width: 2;
          width: 1.2rem;
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
      </style>

      <div class="app">
        <section class="side-menu">
          <div class="side-menu__top">
            <button class="brand" type="button" aria-label="Colapsar menú">
              <svg class="brand__icon" viewBox="0 0 24 24">
                <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.8 3.8v7.8L12 19.7l-6.8-3.8V8.1L12 4.3Z"></path>
              </svg>
              <span class="side-menu__label">Sendo Beta</span>
            </button>
            <button class="icon-btn" type="button" aria-label="Buscar">
              <svg class="icon-btn__icon" viewBox="0 0 24 24">
                <path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l5 5L20.5 19l-5-5Zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"></path>
              </svg>
            </button>
          </div>

          <a class="new-chat" href="#">
            <svg class="new-chat__icon" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
            <span class="side-menu__label">Nuevo chat</span>
          </a>

          <chat-history class="side-menu__history"></chat-history>

          <div class="side-menu__user side-menu__label">
            <div class="avatar">JO</div>
            <div class="side-menu__user-info">
              <span class="side-menu__user-name">Jhordy Orozco</span>
              <span class="side-menu__user-plan">Admin</span>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  /** Conecta el botón de marca con el colapso del menú y del historial. */
  bindToggle() {
    const toggleButton = this.shadow.querySelector('.brand');
    const history = this.shadow.querySelector('chat-history');

    toggleButton.addEventListener('click', () => {
      this.toggleAttribute('collapsed');
      history.toggleAttribute('collapsed', this.hasAttribute('collapsed'));
    });
  }
}

customElements.define('app-menu', AppMenu);
