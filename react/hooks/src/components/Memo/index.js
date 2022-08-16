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

// 如果本组件中的数据没有发生变化，阻止组件更新
const Foo = memo(function Foo() {
  console.log("Foo component render");
  return <div>foo component</div>;
});

export default TestMemo;
