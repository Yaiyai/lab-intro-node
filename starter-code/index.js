class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    
    return this.length = this.items.length
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    this.items.sort((a, b) => b - a)
    return this.items[0]
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    this.items.sort((a, b) => a - b)
    return this.items[0]

  }

  sum() {
    return this.length === 0 ? 0 : this.items.reduce((acc, elm) => (acc + elm), 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }

    return this.sum() / this.length
  }

}

module.exports = SortedList

let prueba = new SortedList()
prueba.add(1)
prueba.add(4)
prueba.add(7)
console.log(prueba.sum());
console.log(prueba.length);
console.log(prueba.avg());