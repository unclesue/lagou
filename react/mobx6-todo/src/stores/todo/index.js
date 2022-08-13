import { action, computed, makeObservable, observable, runInAction } from "mobx";
import Item from "./item";

class TodoStore {
  todos = [];
  constructor(todos) {
    if (todos) this.todos = todos;
    makeObservable(this, {
      todos: observable,
      create: action,
      unCompletedCount: computed
    });
    this.loadData()
  }
  create(title) {
    this.todos.push(new Item(title));
  }
  get unCompletedCount() {
    return this.todos.filter(todo => !todo.completed).length
  }
  async loadData() {
    const data = await new Promise(resolve => {
      resolve([{ title: "Vue" }, { title: "React" }, { title: "Angular" }])
    })
    runInAction(() => {
      data.forEach(todo => this.todos.push(new Item(todo.title)))
    })
  }
}

export default TodoStore;
