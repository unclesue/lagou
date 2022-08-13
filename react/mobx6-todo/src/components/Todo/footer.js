import { observer } from "mobx-react";
import { useStore } from "../../stores";

function Footer() {
  const { todoStore } = useStore()
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoStore.unCompletedCount}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default observer(Footer);
