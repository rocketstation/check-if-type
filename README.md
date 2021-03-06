# Check If Type

Check If Type is based on [just](https://github.com/angus-c/just). It provides helpers to check if argument type is object, array, function

## Installation

```
npm i @rocketstation/check-if-type
```

## Usage

```javascript
import * as checkIfType from '@rocketstation/check-if-type'

console.log(checkIfType.isObj({})) // true
console.log(checkIfType.isObj([])) // false
console.log(checkIfType.isObj(() => {})) // false

console.log(checkIfType.isArr({})) // false
console.log(checkIfType.isArr([])) // true
console.log(checkIfType.isArr(() => {})) // false

console.log(checkIfType.isFn({})) // false
console.log(checkIfType.isFn([])) // false
console.log(checkIfType.isFn(() => {})) // true
```

## Motivation

We were tired of writing this code again and again

## License

Check If Type is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
