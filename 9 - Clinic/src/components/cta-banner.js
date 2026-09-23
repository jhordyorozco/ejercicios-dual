/**
 * Closing call-to-action banner with title, price line and action.
 */
export class CtaBanner extends HTMLElement {
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

        .cta {
          background: hsl(200, 80%, 30%);
          padding: 3.5rem 1.5rem;
          width: 100%;
        }

        .cta__inner {
          margin: 0 auto;
          max-width: 42rem;
          text-align: center;
        }

        .cta__actions {
          margin-top: 1.5rem;
        }

        ::slotted([slot="title"]) {
          color: hsl(0, 0%, 100%);
          font-size: 1.875rem;
          font-weight: 800;
          line-height: 1.25;
        }

        ::slotted([slot="body"]) {
          color: hsl(200, 60%, 90%);
          display: block;
          font-size: 1.0625rem;
          line-height: 1.6;
          margin-top: 0.75rem;
        }

        ::slotted([slot="action"]) {
          background: hsl(0, 0%, 100%);
          border-radius: 0.5rem;
          color: hsl(200, 80%, 30%);
          display: inline-block;
          font-size: 0.9375rem;
          font-weight: 700;
          padding: 0.9rem 1.75rem;
          text-decoration: none;
        }
      </style>
      <section class="cta">
        <div class="cta__inner">
          <slot name="title"></slot>
          <slot name="body"></slot>
          <div class="cta__actions">
            <slot name="action"></slot>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('cta-banner', CtaBanner);
