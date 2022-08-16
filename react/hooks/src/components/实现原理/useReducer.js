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
  root.render(<TestUseReducer root={root} />)
  stateIndex = 0
}

function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)
  function dispatch(action) {
    setState(reducer(state, action))
  }
  return [state, dispatch]
}

function TestUseReducer(props) {
  root = props.root
  function reducer(state, action) {
    switch(action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <div>
        <span>{state}</span>
        <button onClick={() => dispatch({ type: "increment" })}>increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      </div>
    </div>
  );
}

export default TestUseReducer;
