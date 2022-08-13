import { useState } from "react";
import { useStore } from "../../stores";

function Header() {
  const [title, setTitle] = useState("");
  const { todoStore } = useStore()
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            todoStore.create(title);
            setTitle("");
          }
        }}
      />
    </header>
  );
}

export default Header;
