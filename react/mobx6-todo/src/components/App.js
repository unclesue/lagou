import { Store, Provider } from "../stores";
import Counter from "./Counter";
import Todo from "./Todo";

const store = new Store();

function App() {
  return (
    <Provider value={store}>
      <Counter />
      <Todo />
    </Provider>
  );
}

export default App;
