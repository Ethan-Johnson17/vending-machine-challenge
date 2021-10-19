import { Snacks } from "./Models/snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  moneyAdded = 0
  snacks = [{
    snack: 'Chicken Basket',
    price: 10.00,
  },
  {
    snack: 'burger',
    price: 5.00
  },
  {
    snack: 'chips',
    price: 1.50
  }]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
