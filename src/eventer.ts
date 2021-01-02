import remove from './remove'
/**
 * Eventer Based on PubSub
 * on → subscribe
 * off → unsubscribe
 * trigger → publish
 * type → topic
 */
class Eventer {
  subscribers = {}

  constructor() {
    this.subscribers = {}
  }

  on = (type: string, callback: Function) => {
    (this.subscribers[type] = this.subscribers[type] || []).push(callback)
    return this
  }

  notify = (type: string, ...args: unknown[]) => {
    const tasks = this.subscribers[type]
    if (!tasks) {
      new Error(`Type: ${type} is not subscribed by Eventer.`)
      return
    }

    tasks.forEach((callback: Function) => {
      try {
        callback.apply(type, args)
      } catch (error) {
        console.log(error)
      }
    })

    return this
  }

  off = (type: string, callback: Function) => {
    const tasks = this.subscribers[type]
    if (!tasks) return this
    remove(tasks, callback)

    if (!tasks.length) {
      delete this.subscribers[type]
    }
    return this
  }
}

export default Eventer