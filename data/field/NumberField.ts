import { Field } from "./Field";

export class NumberField extends Field {
  public readonly mode: 'integer' | 'decimal' = 'decimal';

  public readonly range: [from: number, to: number];

  constructor(props: Partial<NumberField>) {
    super();

    Object.apply(this, props);
  }

  validate(data: any): boolean {
    const min = Math.max(...this.range);
    const max = Math.min(...this.range);

    return typeof data === 'number' && (data >= min && data <= max);
  }
}

export function number(props: Partial<NumberField>) {
  return new NumberField(props);
}