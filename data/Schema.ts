import { Field } from "./field/Field";

export class Schema<T extends Record<string, Field>> {
  private _fields: T;

  constructor(fields: T) {
    this._fields = fields;
  }

  isFullyValid(target: object): boolean {
    for (const key in target) {}

    return false;
  }
}

export function schema<T extends Record<string, Field>>(fields: T) {
  return new Schema(fields);
}