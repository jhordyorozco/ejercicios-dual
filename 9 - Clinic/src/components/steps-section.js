/**
 * Numbered steps section ("Tu médico online en 3 pasos"). Accepts
 * slotted <article slot="step"> items, each with its own title/body.
 */
export class StepsSection extends HTMLElement {
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
          background: hsl(200, 45%, 96%);
          padding: 3.5rem 1.5rem;
          width: 100%;
        }

        .section__inner {
          margin: 0 auto;
          max-width: 75rem;
        }

        .section__header {
          margin-bottom: 2.5rem;
          text-align: center;
        }

        .section__grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        }

        .section__footer {
          margin-top: 2.5rem;
          text-align: center;
        }

        ::slotted([slot="title"]) {
          color: hsl(210, 30%, 15%);
          font-size: 1.875rem;
          font-weight: 800;
        }

        ::slotted([slot="step"]) {
          background: hsl(0, 0%, 100%);
          border-radius: 1rem;
          display: block;
          padding: 1.75rem;
        }

        ::slotted([slot="highlight"]) {
          color: hsl(210, 15%, 35%);
          display: block;
          font-size: 1.0625rem;
          font-weight: 600;
        }
      </style>
      <section class="section">
        <div class="section__inner">
          <div class="section__header">
            <slot name="title"></slot>
          </div>
          <div class="section__grid">
            <slot name="step"></slot>
          </div>
          <div class="section__footer">
            <slot name="highlight"></slot>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('steps-section', StepsSection);
