import { EventMap } from "../../lifecycle/Emitter";
import { DataHolder } from "../DataHolder";

export abstract class Value<T, EM extends EventMap> extends DataHolder<EM> {
  private _value!: T;
  public set value(value: T) {
    this._value = value;
  }
  public get value() {
    return this._value;
  }
}