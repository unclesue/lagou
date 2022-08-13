import { observer } from "mobx-react";
import { useStore } from "../../stores";
import Footer from "./footer";
import Header from "./header";
import Item from "./item";

function Todo() {
  const { todoStore } = useStore()
  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todoStore.todos.map((todo) => (
            <Item key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default observer(Todo);
