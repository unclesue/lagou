import { useEffect, useState } from "react";

function TestUseRef() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    setIntervalId(
      setInterval(() => {
        setCount((count) => count + 1);
      }, 1000)
    );
  }, []);

  function stopCount() {
    console.log(intervalId);
    clearInterval(intervalId);
  }

  return (
    <div>
      <span>intervalId: {intervalId} </span>
      <span>count: {count}</span>
      <button onClick={stopCount}>stopCount</button>
    </div>
  );
}

export default TestUseRef;
