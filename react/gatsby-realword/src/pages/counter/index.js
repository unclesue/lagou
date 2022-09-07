import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../../store/slices/counter"

export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const [value, setValue] = useState(2)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: "center" }}>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        &nbsp;&nbsp;
        <button onClick={() => dispatch(decrement(2))}>-1</button>
      </div>
      <div>
        <input
          type="number"
          value={value}
          onChange={({ target: { valueAsNumber } }) => setValue(valueAsNumber)}
        />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Add Amount
        </button>
        &nbsp;&nbsp;
        <button onClick={() => dispatch(incrementAsync(value))}>
          Add Async
        </button>
      </div>
    </div>
  )
}
