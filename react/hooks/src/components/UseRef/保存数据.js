import { useEffect, useRef, useState } from "react";

function TestUseRef() {
  const [count, setCount] = useState(0)
  // 即时组件重新渲染，保存的数据任然还在，保存的数据被更改不会触发组件重新渲染。
  let timeId = useRef()
  // let timeId = null 错误示例
  useEffect(() => {
    timeId.current = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000);
  }, [])

  function stopCount() {
    // 如果不使用useRef，count变化组件重新渲染，timeId就被重置为null，stopCount也就不起作用了
    console.log(timeId)
    clearInterval(timeId.current)
  }

  return (
    <div>
      <span>{count}</span>
      <button onClick={stopCount}>stopCount</button>
    </div>
  );
}

export default TestUseRef;
