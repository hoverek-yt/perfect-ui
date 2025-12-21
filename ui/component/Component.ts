import { Emitter, EventMap } from "../../lifecycle/Emitter";

export class Component<E extends HTMLElement, EM extends EventMap> extends Emitter<EM> {
	private _nativeElement: E;
	public get nativeElement() {
		return this._nativeElement;
	}

	constructor(element: E) {
		super();

		this._nativeElement = element;
	}
}