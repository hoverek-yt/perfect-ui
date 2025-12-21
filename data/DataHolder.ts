import { Emitter } from '../lifecycle/Emitter'

export abstract class DataHolder extends Emitter {
  private _parent?: DataHolder;
  public get parent() {
    return this._parent;
  }
}