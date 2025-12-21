export type EmitterEventHandler<D> = (data: D) => void;

export class Emitter<EmitterEventHandlerDataMap> {
  private _eventMap: Map<string, EmitterEventHandler<EmitterEventHandlerDataMap[keyof EmitterEventHandlerDataMap]>[]> = new Map();
  public get eventMap() {
    return this._eventMap;
  }

  private ensureEventArrayExists(event: string) {
    if (!this.eventMap.has(event)) {
      this.eventMap.set(event, []);
    }
  }

  public on<K extends keyof EmitterEventHandlerDataMap>(event: K, handler: EmitterEventHandler<EmitterEventHandlerDataMap[K]>) {
    this.ensureEventArrayExists(event);

    this.eventMap.get(event).push(handler);
    return this;
  }

  public off<K extends keyof EmitterEventHandlerDataMap>(event: K, handler: EmitterEventHandler<EmitterEventHandlerDataMap[K]>): boolean {
    this.ensureEventArrayExists(event);

    const handlers = this.eventMap.get(event);
    const handlerIndex = handlers.indexOf(handler);

    if (handlerIndex > 0) {
      handlers.splice(handlerIndex, 1);

      return true;
    }

    return false;
  }

  public emit<K extends keyof EmitterEventHandlerDataMap>(event: K, data: EmitterEventHandlerDataMap[K]) {
    this.ensureEventArrayExists(event);

    const handlers = this.eventMap.get(event);
    handlers.forEach(handler => handler(data));
  }
}