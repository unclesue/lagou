import { observable, action, computed } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;
class Todo {
  @observable todos = []
  @observable filter = 'All'
  @observable editing = null

  @action.bound add(e) {
    if (e.keyCode !== ENTER_KEY) return
    const value = e.target.value.trim()
    if (!value) return
    this.todos.push({
      id: uuidv4(),
      name: value,
      completed: false
    })
    e.target.value = ""
  }

  @action.bound changeCompleted(index, flag) {
    this.todos[index].completed = flag
  }

  @action.bound changeFilter(filter) {
    this.filter = filter
  }

  @computed get list() {
    switch (this.filter) {
      case "All":
        return this.todos
      case "Active":
        return this.todos.filter(item => !item.completed)
      case "Completed":
        return this.todos.filter(item => item.completed)
      default:
        return this.todos
    }
  }

  @action onEdit(index) {
    this.editing = { ...this.todos[index] }
  }

  @action onChange(index, e) {
    const value = e.target.value.trim()
    this.todos[index].name = value
  }

  @action onKeyDown(index, e) {
    if (e.keyCode === ESCAPE_KEY) {
      this.todos[index].name = this.editing.name
    } else if (e.keyCode === ENTER_KEY && !this.todos[index].name) {
      this.todos.splice(index, 1)
    }
  }

  @action onBlur(index) {
    this.editing = null
    if (!this.todos[index].name) {
      this.todos.splice(index, 1)
    }
  }
}

export default new Todo()
