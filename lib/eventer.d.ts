/**
 * Eventer Based on PubSub
 * on → subscribe
 * off → unsubscribe
 * trigger → publish
 * type → topic
 */
declare class Eventer {
    subscribers: {};
    constructor();
    on: (type: string, callback: Function) => this;
    notify: (type: string, ...args: unknown[]) => this;
    off: (type: string, callback: Function) => this;
}
export default Eventer;
