export abstract class Value<T> {
  private _value: T
  public set value(value: T) {
    this._value = value;
  }
  public get value() {
    return this._value
  }
}