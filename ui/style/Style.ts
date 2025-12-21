import { Emitter, EventMap } from "../../lifecycle/Emitter";

export class Style<EM extends EventMap = object> extends Emitter<EM> { }