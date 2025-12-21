export class Component<E extends HTMLElement> {
	private _nativeElement: E;
	public get nativeElement() {
		return this._nativeElement;
	}

	constructor(element: E) {
		this._nativeElement = element;
	}
}