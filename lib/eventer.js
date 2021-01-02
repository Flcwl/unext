"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const remove_1 = require("./remove");
/**
 * Eventer Based on PubSub
 * on → subscribe
 * off → unsubscribe
 * trigger → publish
 * type → topic
 */
class Eventer {
    constructor() {
        this.subscribers = {};
        this.on = (type, callback) => {
            (this.subscribers[type] = this.subscribers[type] || []).push(callback);
            return this;
        };
        this.notify = (type, ...args) => {
            const tasks = this.subscribers[type];
            if (!tasks) {
                new Error(`Type: ${type} is not subscribed by Eventer.`);
                return;
            }
            tasks.forEach((callback) => {
                try {
                    callback.apply(type, args);
                }
                catch (error) {
                    console.log(error);
                }
            });
            return this;
        };
        this.off = (type, callback) => {
            const tasks = this.subscribers[type];
            if (!tasks)
                return this;
            remove_1.default(tasks, callback);
            if (!tasks.length) {
                delete this.subscribers[type];
            }
            return this;
        };
        this.subscribers = {};
    }
}
exports.default = Eventer;
