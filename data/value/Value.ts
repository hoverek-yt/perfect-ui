import { DataHolder } from "../DataHolder";

export abstract class Value<T> extends DataHolder {
  private _value: T;
  public set value(value: T) {
    this._value = value;
  }
  public get value() {
    return this._value;
  }
}