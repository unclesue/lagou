import { useEffect, useState } from "react";
// import { unmountComponentAtNode } from "react-dom"; // 在 React 18 中，unmountComponentAtNode 已被 root.unmount() 取代。

function TestUseEffect({ root }) {
  const [count, setCount] = useState(110);
  // componentDidMount, componentDidUpdate
  useEffect(() => {
    console.log("componentDidMount, componentDidUpdate")
  })

  // componentDidMount
  useEffect(() => {
    console.log("componentDidMount")
  }, [])

  // componentWillUnMount
  useEffect(() => {
    return () => {
      console.log("componentWillUnMount")
    }
  }, [])

  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>累加</button>
        <button onClick={() => root.unmount()}>卸载组件</button>
      </div>
    </div>
  );
}

export default TestUseEffect;
