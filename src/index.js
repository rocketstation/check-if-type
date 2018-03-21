const checkIfType = (t) => (v) => Object.prototype.toString.call(v) === `[object ${t}]`

export const isObj = checkIfType('Object')

export const isArr = checkIfType('Array')

export const isFn = checkIfType('Function')
