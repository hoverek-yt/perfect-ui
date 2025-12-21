export type EmitterEventHandler<D> = (data: D) => void;

export class Emitter<EmitterEventHandlerDataMap> {
  private _eventMap: Map<string, EmitterEventHandler<EmitterEventHandlerDataMap[keyof EmitterEventHandlerDataMap]>[]> = new Map();

  private ensureEventArrayExists(event: string) {
    if (!this._eventMap.has(event)) {
      this._eventMap.set(event, []);
    }
  }

  public on<K extends keyof EmitterEventHandlerDataMap>(event: K & string, handler: EmitterEventHandler<EmitterEventHandlerDataMap[K]>) {
    this.ensureEventArrayExists(event);

    this._eventMap.get(event).push(handler);
    return this;
  }

  public off<K extends keyof EmitterEventHandlerDataMap>(event: K & string, handler: EmitterEventHandler<EmitterEventHandlerDataMap[K]>): boolean {
    this.ensureEventArrayExists(event);

    const handlers = this._eventMap.get(event);
    const handlerIndex = handlers.indexOf(handler);

    if (handlerIndex > -1) {
      handlers.splice(handlerIndex, 1);

      return true;
    }

    return false;
  }

  public emit<K extends keyof EmitterEventHandlerDataMap>(event: K & string, data: EmitterEventHandlerDataMap[K]) {
    const handlers = this._eventMap.get(event);
    if (!handlers) return;

    handlers.forEach(handler => handler(data));
  }
}