/**
 * Site footer with link columns, contact info, social links and legal.
 */
export class AppFooter extends HTMLElement {
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

        .footer {
          background: hsl(210, 30%, 12%);
          padding: 3rem 1.5rem 1.5rem;
          width: 100%;
        }

        .footer__inner {
          margin: 0 auto;
          max-width: 75rem;
        }

        .footer__grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
          padding-bottom: 2rem;
        }

        .footer__social {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .footer__bottom {
          border-top: 0.0625rem solid hsl(210, 20%, 25%);
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-between;
          padding-top: 1.5rem;
        }

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

        ::slotted([slot="social"]) {
          color: hsl(210, 15%, 75%);
          font-size: 0.875rem;
          text-decoration: none;
        }

        ::slotted([slot="legal"]) {
          color: hsl(210, 15%, 60%);
          font-size: 0.8125rem;
          text-decoration: none;
        }

        ::slotted([slot="copyright"]) {
          color: hsl(210, 15%, 60%);
          font-size: 0.8125rem;
        }
      </style>
      <footer class="footer">
        <div class="footer__inner">
          <div class="footer__grid">
            <slot name="column"></slot>
          </div>
          <div class="footer__social">
            <slot name="social"></slot>
          </div>
          <div class="footer__bottom">
            <slot name="copyright"></slot>
            <slot name="legal"></slot>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
