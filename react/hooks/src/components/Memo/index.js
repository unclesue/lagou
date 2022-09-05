import { memo, useState } from "react";

function TestMemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>累加</button>
      </div>
      <Foo />
    </div>
  );
}

// React 的默认行为是当父组件渲染时，React 会递归渲染其中的所有子组件！
// memo：如果本组件中的数据没有发生变化，阻止组件更新
const Foo = memo(function Foo() {
  console.log("Foo component render");
  return <div>foo component</div>;
});

export default TestMemo;
