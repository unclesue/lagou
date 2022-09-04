import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, selectCount } from "./counterSlice";

export function Counter() {
  // const count = useSelector((state) => state.counter.value);
  const count = useSelector(selectCount)
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementAsync(5))}>incrementAsync</button>
    </div>
  );
}
