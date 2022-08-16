import { memo, useCallback, useState } from "react";

function TestUseCallback() {
  const [count, setCount] = useState(0);
  // 性能优化，缓存函数，使组件重新渲染时得到相同的函数实例
  // 如果不使用useCallback，count值变化，TestUseCallback组件重新渲染，会得到新的resetCount函数，Foo组件也就重新渲染了
  const resetCount = useCallback(() => setCount(0), [setCount]);

  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>累加</button>
      </div>
      <Foo resetCount={resetCount} />
    </div>
  );
}

// 如果本组件中的数据没有发生变化，阻止组件更新
const Foo = memo(function Foo({ resetCount }) {
  console.log("Foo component render");
  return (
    <div>
      foo component
      <button onClick={resetCount}>resetCount</button>
    </div>
  );
});

export default TestUseCallback;
