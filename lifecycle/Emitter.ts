export type EmitterEventHandler = () => void;

export abstract class Emitter {
  private _eventMap: Map<string, EmitterEventHandler[]> = new Map();
  public get eventMap() {
    return this._eventMap;
  }

  private ensureEventArrayExists(event: string) {
    if (!this.eventMap.has(event)) {
      this.eventMap.set(event, []);
    }
  }

  public on(event: string, handler: EmitterEventHandler) {
    this.ensureEventArrayExists(event);

    this.eventMap.get(event).push(handler);
    return this;
  }

  public off(event: string, handler: EmitterEventHandler) {
    const handlers = this.eventMap.get(event);
    const handlerIndex = handlers.indexOf(handler);

    if (handlerIndex > 0) {
      handlers.splice(handlerIndex, 1);

      return true;
    }

    return false;
  }
}