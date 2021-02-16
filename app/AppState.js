import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Buy from "./Models/Buy.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  buy = new Buy()

  yourMoney = 50
  moneySpent = 0
  kitkatQuantity = 0

  snickersQuantity = 0 
  cliffBarQuantity = 0

  spriteQuantity = 0
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
