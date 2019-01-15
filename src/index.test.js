const { isArr, isFn, isObj } = require('./index')

it('checks if arg type is array', () => {
  expect(isArr([])).toBe(true)
})

it('checks if arg type is function', () => {
  expect(isFn(() => {})).toBe(true)
})

it('checks if arg type is object', () => {
  expect(isObj({})).toBe(true)
})
