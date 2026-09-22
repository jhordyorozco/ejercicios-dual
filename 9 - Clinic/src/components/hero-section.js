/**
 * Hero section: headline, supporting copy, actions and a media slot.
 */
export class HeroSection extends HTMLElement {
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

        .hero {
          background: hsl(200, 45%, 96%);
          padding: 3rem 1.5rem;
          width: 100%;
        }

        .hero__inner {
          align-items: center;
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
          margin: 0 auto;
          max-width: 75rem;
        }

        .hero__media {
          border-radius: 1rem;
          overflow: hidden;
        }

        .hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .hero__badge {
          background: hsl(0, 0%, 100%);
          border-radius: 0.75rem;
          box-shadow: 0 0.25rem 0.75rem hsla(210, 30%, 20%, 0.08);
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.75rem 1.25rem;
        }

        ::slotted([slot="media"]) {
          border-radius: 1rem;
          display: block;
          height: auto;
          max-width: 100%;
          width: 100%;
        }

        ::slotted([slot="eyebrow"]) {
          color: hsl(200, 80%, 30%);
          display: inline-block;
          font-size: 0.9375rem;
          font-weight: 700;
          letter-spacing: 0.02rem;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        ::slotted([slot="title"]) {
          color: hsl(210, 30%, 15%);
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.1;
        }

        ::slotted([slot="body"]) {
          color: hsl(210, 15%, 35%);
          display: block;
          font-size: 1.0625rem;
          line-height: 1.6;
          margin-top: 1rem;
        }

        ::slotted(.button) {
          border-radius: 0.5rem;
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.85rem 1.5rem;
          text-decoration: none;
        }

        ::slotted(.button--primary) {
          background: hsl(200, 80%, 30%);
          color: hsl(0, 0%, 100%);
        }

        ::slotted(.button--secondary) {
          background: hsl(0, 0%, 100%);
          border: 0.0625rem solid hsl(200, 30%, 70%);
          color: hsl(200, 80%, 30%);
        }

        ::slotted([slot="badge"]) {
          color: hsl(210, 15%, 30%);
          font-size: 0.9375rem;
          font-weight: 600;
        }
      </style>
      <section class="hero">
        <div class="hero__inner">
          <div class="hero__content">
            <slot name="eyebrow"></slot>
            <slot name="title"></slot>
            <slot name="body"></slot>
            <div class="hero__actions">
              <slot name="actions"></slot>
            </div>
            <div class="hero__badge">
              <slot name="badge"></slot>
            </div>
          </div>
          <div class="hero__media">
            <slot name="media"></slot>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
