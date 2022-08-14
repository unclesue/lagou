import { createContext, useContext } from "react";

const context = createContext()

function TestUseContext() {
  return (
    <context.Provider value={123}>
      <Foo />
      <Bar />
    </context.Provider>
  );
}

function Foo() {
  return <context.Consumer>
    {
      val => <div>Foo组件：{val}</div>
    }
  </context.Consumer>
}

function Bar() {
  const val = useContext(context)
  return <div>Bar组件：{val}</div>
}

export default TestUseContext;
