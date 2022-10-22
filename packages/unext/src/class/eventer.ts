import { removeOne } from "../array";

/**
 * An Emitter based on publish-subscribe pattern.
 */
class Emitter<T extends Function> {
  subscribers = {} as Record<string, T[]>;

  constructor() {
    this.subscribers = {};
  }

  on = (type: string, callback: T) => {
    (this.subscribers[type] = this.subscribers[type] || []).push(callback);
    return this;
  };

  trigger = (type: string, ...args: unknown[]) => {
    const tasks = this.subscribers[type];
    if (!tasks) return;

    tasks.forEach((callback: T) => {
      try {
        callback.apply(type, args);
      } catch (error) {
        console.log(error);
      }
    });

    return this;
  };

  off = (type: string, callback: T) => {
    if (!callback) {
      delete this.subscribers[type];
      return;
    }

    const tasks = this.subscribers[type];
    if (!tasks) return this;
    removeOne(tasks, callback);

    if (!tasks.length) {
      delete this.subscribers[type];
    }
    return this;
  };
}

export default Emitter;
