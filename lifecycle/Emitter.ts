type EventMap = Record<string | symbol, any>;

class HandlerNode<D> {
  fn!: (data: D) => void;
  next: HandlerNode<D> | null = null;
  active = true;
}

export class Emitter<M extends EventMap> {
  private heads: {
    [K in keyof M]?: HandlerNode<M[K]> | null;
  } = {};

  on<K extends keyof M>(
    event: K,
    fn: (data: M[K]) => void
  ): () => void {
    const node = new HandlerNode<M[K]>();
    node.fn = fn;

    node.next = this.heads[event] ?? null;
    this.heads[event] = node;

    // ZERO lookups – without Map / Set
    return () => {
      node.active = false;
    };
  }

  emit<K extends keyof M>(event: K, data: M[K]) {
    let node = this.heads[event];
    let prev: HandlerNode<M[K]> | null = null;

    while (node) {
      if (node.active) {
        node.fn(data);
        prev = node;
        node = node.next;
      } else {
        // lazy cleanup – O(1)
        const next = node.next;
        if (prev) prev.next = next;
        else this.heads[event] = next;
        node = next;
      }
    }
  }

  clear<K extends keyof M>(event?: K) {
    if (event) this.heads[event] = null;
    else this.heads = {};
  }
}
