export class ChatHistory extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = /* html */ `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
        }

        :host {
          display: grid;
          gap: 1rem;
          grid-template-rows: auto 1fr;
          min-height: 0;
          overflow: hidden;
        }

        .chat-history__section {
          overflow: hidden;
        }

        .chat-history__section--scroll {
          min-height: 0;
          overflow-y: scroll;
          scrollbar-color: hsl(39, 25%, 66%) hsl(39, 21%, 58%);
          scrollbar-width: thin;
        }

        .chat-history__list {
          display: grid;
          gap: 0.2rem;
          list-style: none;
        }

        .chat-history__title {
          color: hsl(34, 17%, 39%);
          font-size: 0.8rem;
          font-weight: bold;
          padding: 0.3rem;
        }

        .chat-history__link {
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

        .chat-history__link:hover {
          background: hsl(40, 29%, 71%);
        }

        .chat-history__icon {
          fill: none;
          flex-shrink: 0;
          height: 1.1rem;
          stroke: currentColor;
          stroke-width: 1.5;
          width: 1.1rem;
        }

        .chat-history__label {
          max-width: 12rem;
          opacity: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: max-width 0.2s, opacity 0.2s;
          white-space: nowrap;
        }

        :host([collapsed]) .chat-history__label {
          max-width: 0;
          opacity: 0;
        }
      </style>

      <nav class="chat-history__section">
        <ul class="chat-history__list">
          <li class="chat-history__title chat-history__label">Fijado</li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Pagar menos impuesto Hacienda</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Tutorial para ser millonario</span>
            </a>
          </li>
        </ul>
      </nav>

      <nav class="chat-history__section chat-history__section--scroll">
        <ul class="chat-history__list">
          <li class="chat-history__title chat-history__label">Recientes</li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Como ganar la lotería</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Colores Vintage</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Como farmear Aura</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Regulación masiva</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Trucos GTA</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Oliva o aceituna?</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Calcular impuesto</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Edita foto con musculos</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Bajar de peso</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Preparar Shandy</span>
            </a>
          </li>
          <li class="chat-history__item">
            <a class="chat-history__link" href="#">
              <svg class="chat-history__icon" viewBox="0 0 24 24">
              <path d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z"></path>
            </svg>
            <span class="chat-history__label">Tasa dolar a bs</span>
            </a>
          </li>
        </ul>
        
      </nav>
    `;
  }
}

customElements.define('chat-history', ChatHistory);