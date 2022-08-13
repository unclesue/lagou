import { createContext, useContext } from "react";
import CounterStore from "./counter";
import TodoStore from "./todo";

class Store {
  constructor() {
    this.todoStore = new TodoStore()
    this.counterStore = new CounterStore()
  }
}

const context = createContext()
const Provider = context.Provider
const useStore = () => useContext(context)

export { Store, Provider, useStore }
