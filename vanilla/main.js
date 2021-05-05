import { nowTime } from './util.js'

export function sayHello(name) {
  window.alert(`hello ${name || 'bro'}, now the time is ${nowTime()}`)
}
