
let state = [];
let setters = [];
let stateIndex = 0;
let root = null

function createSetter(index) {
  return function setter(newState) {
    state[index] = newState;
    render();
  };
}

function useState(initialState) {
  state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState;
  setters[stateIndex] = setters[stateIndex] ? setters[stateIndex] : createSetter(stateIndex);
  let value = state[stateIndex]
  let setter = setters[stateIndex]
  stateIndex++;
  return [
    value,
    setter
  ]
}

function render() {
  root.render(<TestUseState root={root} />)
  stateIndex = 0
}

function TestUseState(props) {
  root = props.root
  const [count, setCount] = useState(0);
  const [name, setName] = useState("vue");
  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>setCount</button>
      </div>
      <div>
        <span>{name}</span>
        <button onClick={() => setName("react" + Math.random())}>setName</button>
      </div>
    </div>
  );
}

export default TestUseState;
