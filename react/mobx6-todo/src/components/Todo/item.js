import { observer } from "mobx-react";

function Item({ todo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={todo.toggle}
        />
        <label>{todo.title}</label>
        <button className="destroy"></button>
      </div>
      <input
        className="edit"
        value="Create a TodoMVC template"
        onChange={() => {}}
      />
    </li>
  );
}

export default observer(Item);
