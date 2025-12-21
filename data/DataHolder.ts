export abstract class DataHolder {
  private _parent: DataHolder;
  public get parent() {
    return this._parent;
  }
}