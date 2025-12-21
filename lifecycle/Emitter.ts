export type EventMap = Record<string | symbol, any>;

export class Emitter<M extends EventMap> {
  private handlers: { [K in keyof M]?: Set<(data: M[K]) => void> } = {};

  on<K extends keyof M>(
    event: K,
    handler: (data: M[K]) => void
  ): () => void {
    (this.handlers[event] ??= new Set()).add(handler);
    return () => this.off(event, handler);
  }

  once<K extends keyof M>(
    event: K,
    handler: (data: M[K]) => void
  ) {
    const off = this.on(event, (data) => {
      off();
      handler(data);
    });
  }

  off<K extends keyof M>(
    event: K,
    handler: (data: M[K]) => void
  ): boolean {
    return this.handlers[event]?.delete(handler) ?? false;
  }

  emit<K extends keyof M>(event: K, data: M[K]) {
    const snapshot = this.handlers[event];
    if (!snapshot) return;

    // snapshot zabezpiecza przed modyfikacją w trakcie emit
    for (const handler of [...snapshot]) {
      handler(data);
    }
  }

  clear<K extends keyof M>(event?: K) {
    if (event) this.handlers[event]?.clear();
    else this.handlers = {};
  }
}
