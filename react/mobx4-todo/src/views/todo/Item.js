import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import classNames from "classnames";

@inject("todo")
@observer
class Item extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.onDoubleClick = this.onDoubleClick.bind(this);
  }
  componentDidUpdate() {
    this.inputRef.current.focus()
  }
  onDoubleClick(index) {
    const { todo } = this.props;
    todo.onEdit(index);
  }
  render() {
    const { todo, item, index } = this.props;
    return (
      <li
        className={classNames({
          completed: item.completed,
          editing: todo.editing && todo.editing.id === item.id,
        })}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={item.completed}
            onChange={(e) => todo.changeCompleted(index, e.target.checked)}
          />
          <label onDoubleClick={() => this.onDoubleClick(index)}>
            {item.name}
          </label>
          <button className="destroy"></button>
        </div>
        <input
          ref={this.inputRef}
          className="edit"
          value={item.name}
          onBlur={() => todo.onBlur(index)}
          onChange={(e) => todo.onChange(index, e)}
          onKeyDown={(e) => todo.onKeyDown(index, e)}
        />
      </li>
    );
  }
}

export default Item;
