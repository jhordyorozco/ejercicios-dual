/**
 * Single link column used inside <app-footer>.
 */
export class FooterColumn extends HTMLElement {
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

        ::slotted([slot="heading"]) {
          color: hsl(0, 0%, 100%);
          display: block;
          font-size: 0.9375rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        ::slotted([slot="link"]) {
          color: hsl(210, 15%, 75%);
          display: block;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          text-decoration: none;
        }
      </style>
      <div class="footer-column">
        <slot name="heading"></slot>
        <slot name="link"></slot>
      </div>
    `;
  }
}

customElements.define('footer-column', FooterColumn);
