/**
 * Single numbered step used inside <steps-section>.
 */
export class StepItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  static get observedAttributes() {
    return ['number'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const number = this.getAttribute('number') || '1';

    this.shadowRoot.innerHTML = `
      <style>
        * { box-sizing: border-box; margin: 0; }

        .step__number {
          background: hsl(200, 80%, 30%);
          border-radius: 50%;
          color: hsl(0, 0%, 100%);
          display: flex;
          align-items: center;
          font-size: 1.125rem;
          font-weight: 700;
          height: 2.5rem;
          justify-content: center;
          margin-bottom: 1rem;
          width: 2.5rem;
        }

        ::slotted([slot="title"]) {
          color: hsl(210, 30%, 15%);
          font-size: 1.1875rem;
          font-weight: 700;
        }

        ::slotted([slot="body"]) {
          color: hsl(210, 15%, 40%);
          display: block;
          font-size: 0.9375rem;
          line-height: 1.55;
          margin-top: 0.5rem;
        }
      </style>
      <div class="step__number">${number}</div>
      <slot name="title"></slot>
      <slot name="body"></slot>
    `;
  }
}

customElements.define('step-item', StepItem);
