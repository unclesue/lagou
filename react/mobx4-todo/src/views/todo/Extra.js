import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("todo")
@observer
class Extra extends Component {
  render() {
    const { todo } = this.props;
    return (
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count">
          <strong>{todo.list.filter(i => !i.completed).length}</strong> item left
        </span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
          <li>
            <a
              className={todo.filter === "All" ? "selected" : ""}
              href="#/"
              onClick={() => todo.changeFilter("All")}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={todo.filter === "Active" ? "selected" : ""}
              href="#/active"
              onClick={() => todo.changeFilter("Active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={todo.filter === "Completed" ? "selected" : ""}
              href="#/completed"
              onClick={() => todo.changeFilter("Completed")}
            >
              Completed
            </a>
          </li>
        </ul>
        {/* <!-- Hidden if no completed items are left ↓ --> */}
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}

export default Extra;
