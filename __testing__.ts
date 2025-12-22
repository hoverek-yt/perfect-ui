import { number } from "./data/field/NumberField";
import { schema } from "./data/Schema";

const Person = schema({ age: number({}) });