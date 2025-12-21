import { Container } from "./Container";

export class Collection extends Container {
  private _entries: { [key: string]: any } = {};

  constructor(schema: any) {
    super();
  }
}