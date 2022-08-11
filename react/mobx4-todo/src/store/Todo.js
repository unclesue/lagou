import { observable, action } from 'mobx'

class Todo {
  @observable todos = []

  @action.bound add(e) {
    if (e.keyCode !== 13) return
    this.todos.push({
      name: e.target.value,
      completed: false
    })
    e.target.value = ""
  }

  @action.bound changeCompleted(index, flag) {
    this.todos[index].completed = flag
  }
}

export default new Todo()
