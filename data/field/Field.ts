
export abstract class Field<T> { 
  abstract validate(data: T): boolean;
}