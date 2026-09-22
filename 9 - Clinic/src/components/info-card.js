/**
 * Reusable card used inside grid sections (conditions, specialties,
 * services, team). Accepts an icon or media image, a title, body copy,
 * optional meta line and an optional link.
 */
export class InfoCard extends HTMLElement {
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

        .card {
          background: hsl(0, 0%, 100%);
          border: 0.0625rem solid hsl(210, 20%, 92%);
          border-radius: 1rem;
          height: 100%;
          padding: 1.5rem;
        }

        .card__icon {
          font-size: 2rem;
          line-height: 1;
          margin-bottom: 1rem;
        }

        .card__media {
          border-radius: 0.75rem;
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .card__meta {
          color: hsl(200, 80%, 30%);
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        ::slotted([slot="icon"]) {
          display: inline-block;
          font-size: 2rem;
        }

        ::slotted([slot="media"]) {
          border-radius: 0.75rem;
          display: block;
          height: 12rem;
          object-fit: cover;
          width: 100%;
        }

        ::slotted([slot="title"]) {
          color: hsl(210, 30%, 15%);
          font-size: 1.125rem;
          font-weight: 700;
          line-height: 1.3;
        }

        ::slotted([slot="body"]) {
          color: hsl(210, 15%, 40%);
          display: block;
          font-size: 0.9375rem;
          line-height: 1.55;
          margin-top: 0.5rem;
        }

        ::slotted([slot="meta"]) {
          color: hsl(200, 80%, 30%);
          font-size: 0.8125rem;
          font-weight: 600;
        }

        ::slotted([slot="link"]) {
          color: hsl(200, 80%, 30%);
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 600;
          margin-top: 0.85rem;
          text-decoration: none;
        }
      </style>
      <article class="card">
        <div class="card__icon"><slot name="icon"></slot></div>
        <div class="card__media"><slot name="media"></slot></div>
        <slot name="title"></slot>
        <slot name="body"></slot>
        <slot name="meta"></slot>
        <br>
        <slot name="link"></slot>
      </article>
    `;
  }
}

customElements.define('info-card', InfoCard);
