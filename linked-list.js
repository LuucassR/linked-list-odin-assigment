class Node {
  constructor(value = null) {
    this.value = value
    this.nextNode = null
  }
}

class LinkedList {
  constructor() {
    this.head = null // head
  }

  append(value) {
    const newNode = new Node(value)
    if (this.head == null) {
      this.head = newNode
    } else {
      let p = this.head
      while (p.nextNode !== null) {
        p = p.nextNode
      }

      p.nextNode = newNode
    }
  }

  prepend(value) {
    const newNode = new Node(value)

    if (this.head == null) {
      this.head = newNode
    } else {
      newNode.nextNode = this.head
      this.head = newNode
    }
  }

  size() {
    let count = 0
    let p = this.head

    while (p !== null) {
      count++
      p = p.nextNode
    }

    return count
  }

  head() {
    return this.head
  }

  tail() {
    let p = this.head
    if (p === null) return null
    while (p.nextNode !== null) {
      p = p.nextNode
    }

    return p
  }

  at(index) {
    let p = this.head
    let i = 0
    while (p !== null && i < index) {
      p = p.nextNode
      i++
    }

    return p
  }

  pop() {
    if (this.head === null) return
    if (this.head.nextNode === null) {
      this.head = null
      return
    }

    let p = this.head
    while (p.nextNode.nextNode !== null) {
      p = p.nextNode
    }

    p.nextNode = null
  }

  contains(value) {
    let p = this.head
    while (p !== null) {
      if (p.value == value) {
        return true
        p = p.nextNode
      }

      return false
    }
  }

  toString() {
    let p = this.head
    let str = ''

    while (p !== null) {
      str += `( ${p.value} ) ->`
      p.nextNode
    }

    return str + 'null'
  }

  insertAt(value, index) {
    if (index == 0) {
      this.prepend(value)
      return
    }

    let p = this.at(index - 1)
    const newNode = new Node(value)
    let temp = p.nextNode
    newNode.nextNode = temp
    p.nextNode = newNode
  }

  removeAr(index) {
    if (index === 0) {
      this.head = this.head.nextNode
      return
    }

    let p = this.at(index - 1)
    p.nextNode = p.nextNode.nextNode

  }
}
