import { Emitter, EventMap } from '../lifecycle/Emitter'

export abstract class DataHolder<T extends EventMap> extends Emitter<T> {
  private _parent?: DataHolder<any>;
  public get parent() {
    return this._parent;
  }
}