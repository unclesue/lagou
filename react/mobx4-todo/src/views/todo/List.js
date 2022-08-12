import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Item from "./Item";

@inject("todo")
@observer
class List extends Component {
  render() {
    const { todo } = this.props;
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todo.list.map((item, index) => (
            <Item item={item} index={index} key={item.id} />
          ))}
        </ul>
      </section>
    );
  }
}

export default List;
