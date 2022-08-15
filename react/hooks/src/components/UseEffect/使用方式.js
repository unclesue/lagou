import { useEffect, useState } from "react";

function TestUseEffect({ root }) {
  const [count, setCount] = useState(110);

  // 每秒自动累加1
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => {
        document.title = count + 1
        return count + 1
      })
    }, 1000)
    return () => {
      console.log("componentWillUnMount setInterval")
      clearInterval(timer)
    }
  }, [])

  // 监听页面滚动
  useEffect(() => {
    const scroll = () => console.log("run run run!!!")
    window.addEventListener("scroll", scroll)
    return () => {
      console.log("componentWillUnMount scroll")
      window.removeEventListener("scroll", scroll)
    }
  }, [])
  return (
    <div style={{height: 2000}}>
      <div>
        <span>{count}</span>
        <button onClick={() => root.unmount()}>卸载组件</button>
      </div>
    </div>
  );
}

export default TestUseEffect;
