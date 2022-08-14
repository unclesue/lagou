import { useState } from "react";

function TestUseState(props) {
  // const [count, setCount] = useState(0);
  // const [count, setCount] = useState(() => 120);

  // const initialCount = props.count || 110 // 不要这样写，每次渲染都会执行，可以放进useState的函数参数中，函数返回什么，初始值就是什么，且函数只被调用一次
  // const [count, setCount] = useState(initialCount);
  const [count, setCount] = useState(() => props.count || 110);

  const [person, setPerson] = useState({ name: "vue", age: 3 });

  function handleCount() {
    setCount((count) => {
      const newCount = count + 1
      // document.title = newCount
      return newCount
    })
    // 设置值得方法是异步的，此处取不到最新的count，可以把它放进设置值得函数中
    document.title = count
  }

  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>累加</button>
        <button onClick={handleCount}>累加</button>
      </div>
      <div>
        <span>{person.name} {person.age}</span>
        <button onClick={() => setPerson({ name: "react", age: 6 })}>换人</button>
        <button onClick={() => setPerson({ ...person, name: "react" })}>不换年龄</button>
      </div>
    </div>
  );
}

export default TestUseState;
