export abstract class Value<T> {
  private _value: T
  public set value(value: T) {
    this._value = value;
  }
  public get value() {
    return this._value
  }
}
export class NumberValue extends Value<number> { }

export class Style { }

export class Component<E extends HTMLElement> {
  private _nativeElement: E
  public get nativeElement() {
    return this._nativeElement
  }

  constructor(element: E) {
    this._nativeElement = element
  }
}