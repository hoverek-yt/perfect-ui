import { Field } from "./field/Field";

export class Schema<T extends Record<string, Field>> {
  private _fields: T;

  constructor(fields: T) {
    this._fields = fields;
  }

  validate(target: object): boolean {
    const schemaKeys = new Set(Object.keys(this._fields));
    const targetKeys = new Set(Object.keys(target));

    schemaKeys.forEach(schemaKey => {
      if (!targetKeys.has(schemaKey)) {
        return false;
      } else {
        return this._fields[schemaKey].validate(target[schemaKey]);
      }
    });

    return true;
  }
}

export function schema<T extends Record<string, Field>>(fields: T) {
  return new Schema(fields);
}