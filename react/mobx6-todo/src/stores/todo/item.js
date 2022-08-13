import { action, makeObservable, observable } from "mobx"

class Item {
  id = Math.random()
  title = ""
  completed = false

  constructor(title) {
    this.title = title
    makeObservable(this, {
      completed: observable,
      toggle: action.bound
    })
  }

  toggle() {
    this.completed = !this.completed
  }
}

export default Item
