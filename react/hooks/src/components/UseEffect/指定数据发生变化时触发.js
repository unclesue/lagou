import { useEffect, useState } from "react";

function TestUseEffect({ root }) {
  const [count, setCount] = useState(110);
  const [dog, setDog] = useState({ dog: "哈希" });
  // componentDidMount, componentDidUpdate
  useEffect(() => {
    document.title = count
    console.log("componentDidMount, componentDidUpdate")
  }, [count]) // 换狗不会触发这个effect

  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>累加</button>
        <button onClick={() => setDog({ dog: "富贵" })}>换狗</button>
      </div>
    </div>
  );
}

export default TestUseEffect;
