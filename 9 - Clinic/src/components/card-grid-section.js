/**
 * Reusable section that lays out slotted <info-card> elements on a
 * responsive CSS grid. Used for conditions, specialties, services and
 * the medical team.
 */
export class CardGridSection extends HTMLElement {
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

        .section {
          background: hsl(0, 0%, 100%);
          padding: 3.5rem 1.5rem;
          width: 100%;
        }

        .section__inner {
          margin: 0 auto;
          max-width: 75rem;
        }

        .section__header {
          margin-bottom: 2rem;
          max-width: 42rem;
        }

        .section__grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
        }

        .section__footer {
          margin-top: 2rem;
          text-align: center;
        }

        ::slotted([slot="eyebrow"]) {
          color: hsl(200, 80%, 30%);
          display: block;
          font-size: 0.9375rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        ::slotted([slot="title"]) {
          color: hsl(210, 30%, 15%);
          font-size: 1.875rem;
          font-weight: 800;
          line-height: 1.2;
        }

        ::slotted([slot="subtitle"]) {
          color: hsl(210, 15%, 35%);
          display: block;
          font-size: 1.0625rem;
          line-height: 1.6;
          margin-top: 0.75rem;
        }

        ::slotted([slot="link"]) {
          background: hsl(200, 80%, 30%);
          border-radius: 0.5rem;
          color: hsl(0, 0%, 100%);
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.85rem 1.5rem;
          text-decoration: none;
        }
      </style>
      <section class="section">
        <div class="section__inner">
          <div class="section__header">
            <slot name="eyebrow"></slot>
            <slot name="title"></slot>
            <slot name="subtitle"></slot>
          </div>
          <div class="section__grid">
            <slot name="cards"></slot>
          </div>
          <div class="section__footer">
            <slot name="link"></slot>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('card-grid-section', CardGridSection);
