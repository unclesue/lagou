import { useMemo, useState } from "react";

function TestUseMemo() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  // useMemo会缓存计算结果，如果监测值没有发生变化，即时组件重新渲染，也不会重新计算
  const result = useMemo(() => {
    // 如果count值发生变化，此函数重新执行
    console.log("useMemo")
    return count ** 2
  }, [count])

  return (
    <div>
      <div>
        <span>{count} {result}</span>
        <span>{bool ? 'true' : 'false'}</span>
        <button onClick={() => setCount(count + 1)}>累加</button>
        <button onClick={() => setBool(!bool)}>setBool</button>
      </div>
    </div>
  );
}

export default TestUseMemo;
