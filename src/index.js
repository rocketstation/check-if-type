const check = require('just-typeof')

const fn = (type) => (v) => check(v) === type

module.exports = {
  isObj: fn('object'),
  isArr: fn('array'),
  isFn: fn('function'),
  default: check,
}
