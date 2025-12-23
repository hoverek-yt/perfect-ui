import { Component } from "./Component";

export abstract class Layout extends Component {
  private rootElement: HTMLElement = document.createElement('div');

  override html<E extends HTMLElement>(): E {
    return this.rootElement;
  }
}