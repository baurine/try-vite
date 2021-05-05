import { nowTime, minItem } from './util.js'

export function sayHello(name) {
  const arr = [5, 2, 8, 1, 3]
  window.alert(
    `hello ${
      name || 'bro'
    }, now the time is ${nowTime()}, min of ${arr} is ${minItem(arr)}`
  )
}
