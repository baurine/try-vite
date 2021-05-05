import min from './node_modules/lodash-es/min.js'
// import { min } from './node_modules/lodash-es/lodash.js' // works
// import { min } from 'lodash-es'  // doesn't work

export function nowTime() {
  return Date().toString()
}

export function minItem(arr) {
  return min(arr)
}
