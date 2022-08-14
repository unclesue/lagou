import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

function TestUseReducer() {
  const [count, dispatch] = useReducer(reducer, 1)
  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      </div>
    </div>
  );
}

export default TestUseReducer;
