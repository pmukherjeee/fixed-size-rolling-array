const FixedArray = require('./index')

let TestLen = 4
let arr = new FixedArray(TestLen)
for (var i = 0; i < (TestLen + 1); i++) {
  arr.unshift(i)
}
console.log(arr.toJSON())
arr.unshift(42)
console.log(arr.toJSON())
