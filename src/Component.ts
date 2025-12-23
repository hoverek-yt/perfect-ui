
export class Component extends HTMLElement {
  public readonly attachedShadowRoot: ShadowRoot;
  public readonly rootStyleSheet: CSSStyleSheet;

  constructor() {
    super();

    this.attachedShadowRoot = this.attachShadow({ mode: 'open' });
    this.rootStyleSheet = new CSSStyleSheet();
    this.shadowRoot.adoptedStyleSheets = [this.rootStyleSheet];

    this.rootStyleSheet.insertRule(`
      :host {}
    `);
  }

  on<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) {
    this.addEventListener(type, listener);
    return this;
  }
  off<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) {
    this.removeEventListener(type, listener, options);
  }
  emit<E extends Event>(event: E): boolean {
    return this.dispatchEvent(event);
  }
}
