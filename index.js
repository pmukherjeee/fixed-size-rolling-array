class RollingArray {
  constructor (length) {
    this.length = length
    this.arr = new Array(length)
  }

  unshift (item) {
    if ((this.arr.length + 1) > this.length) {
      this.arr.pop()
    }
    this.arr.unshift(item)
  }

  contains (item) {
    return this.arr.includes(item)
  }

  toArray () {
    return this.arr
  }

  toJSON () {
    return this.toArray()
  }
}

module.exports = RollingArray
