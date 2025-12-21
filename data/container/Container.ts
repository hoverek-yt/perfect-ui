import { EventMap } from "../../lifecycle/Emitter";
import { DataHolder } from "../DataHolder";

export abstract class Container<EM extends EventMap> extends DataHolder<EM> { }