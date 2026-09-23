/**
 * FAQ section rendered as a native accordion. Accepts slotted
 * <details slot="item"> elements, each with a <summary> and answer copy.
 */
export class FaqSection extends HTMLElement {
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
          max-width: 48rem;
        }

        .section__header {
          margin-bottom: 2rem;
          text-align: center;
        }

        .section__list {
          display: grid;
          gap: 0.75rem;
        }

        ::slotted([slot="title"]) {
          color: hsl(210, 30%, 15%);
          font-size: 1.875rem;
          font-weight: 800;
        }

        ::slotted([slot="item"]) {
          background: hsl(200, 45%, 97%);
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
        }

        ::slotted([slot="item"]::marker) {
          color: hsl(200, 80%, 30%);
        }
      </style>
      <section class="section">
        <div class="section__inner">
          <div class="section__header">
            <slot name="title"></slot>
          </div>
          <div class="section__list">
            <slot name="item"></slot>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('faq-section', FaqSection);
