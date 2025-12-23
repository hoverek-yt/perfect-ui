
export class Component extends HTMLElement {
  public readonly attachedShadowRoot: ShadowRoot;

  constructor() {
    super();

    this.attachedShadowRoot = this.attachShadow({ mode: 'open' });
    this.rootStyleSheet = new CSSStyleSheet();
    this.shadowRoot.adoptedStyleSheets = [this.rootStyleSheet];

    this.rootStyleSheet.insertRule(`
      :host {}
    `);
  }

  on(type, listener) {
    this.addEventListener(type, listener);

    return this;
  }
}
