
export abstract class Component extends HTMLElement {
  public readonly attachedShadowRoot: ShadowRoot;
  public readonly rootStyleSheet: CSSStyleSheet;

  public readonly htmlRootElement: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div') {
    super();

    this.htmlRootElement = document.createElement(tag);

    this.attachedShadowRoot = this.attachShadow({ mode: 'open' });
    this.attachedShadowRoot.adoptedStyleSheets = this.cssStyleSheets();
    this.attachedShadowRoot.appendChild(this.htmlRootElement);
  }

  abstract cssStyleSheets(): CSSStyleSheet[];

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
