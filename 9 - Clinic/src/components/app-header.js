/**
 * App header with brand, navigation and call-to-action slots.
 */
export class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        * { box-sizing: border-box; margin: 0; }

        .header {
          background: hsl(0, 0%, 100%);
          border-bottom: 0.0625rem solid hsl(210, 20%, 92%);
          padding: 1rem 0;
          width: 100%;
        }

        .header__inner {
          align-items: center;
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
          margin: 0 auto;
          max-width: 75rem;
          padding: 0 1.5rem;
        }

        .header__nav {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }

        .header__actions {
          display: flex;
          justify-content: flex-end;
        }

        ::slotted([slot="brand"]) {
          color: hsl(200, 80%, 30%);
          font-size: 1.25rem;
          font-weight: 700;
          text-decoration: none;
        }

        ::slotted([slot="nav"]) {
          color: hsl(210, 15%, 30%);
          font-size: 0.9375rem;
          font-weight: 500;
          text-decoration: none;
        }

        ::slotted([slot="nav"]:hover) {
          color: hsl(200, 80%, 30%);
        }

        ::slotted([slot="cta"]) {
          background: hsl(200, 80%, 30%);
          border-radius: 0.5rem;
          color: hsl(0, 0%, 100%);
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.65rem 1.25rem;
          text-decoration: none;
          white-space: nowrap;
        }
      </style>
      <header class="header">
        <div class="header__inner">
          <slot name="brand"></slot>
          <nav class="header__nav">
            <slot name="nav"></slot>
          </nav>
          <div class="header__actions">
            <slot name="cta"></slot>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
