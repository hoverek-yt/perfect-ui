import { Field } from "../field/Field";

export class Schema<T extends Record<string, Field>> {
  private _fields: T = {};

  constructor(fields: T) {
    this._fields = fields;
  }
}