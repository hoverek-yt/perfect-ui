import { Field } from "./Field";

export class NumberField extends Field {
  public readonly mode: 'integer' | 'decimal' = 'decimal';

  public readonly range: [from: number, to: number];

  constructor(props: Partial<NumberField>) {
    super();

    Object.apply(this, props);
  }

  validate(data: any): boolean {
    return typeof data === 'number';
  }
}

export function number(props: Partial<NumberField>) {
  return new NumberField(props);
}