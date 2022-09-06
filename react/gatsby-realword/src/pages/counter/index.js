import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../store/slice/counter"

export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement(2))}>-1</button>
    </div>
  )
}
