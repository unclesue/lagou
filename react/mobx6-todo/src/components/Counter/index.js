import { autorun, reaction, runInAction } from "mobx"
import { observer } from "mobx-react"
import { useEffect } from "react"
import { useStore } from "../../stores"

function Counter() {
  const { counterStore } = useStore()
  useEffect(() => {
    // 基本数据类型属于值传递，mobx只能跟踪原始属性，跟踪不到复制后的值
    // let count = counterStore.count
    // autorun(() => {
    //   // console.log(counterStore.count)
    //   console.log(count)
    // })
    // 对于引用数据类型，只要地址不变化，mobx就可以跟踪
    // let person = counterStore.person
    // autorun(() => {
    //   console.log(person.name)
    // })

    // 和autorun不用，reaction初始时不会执行副作用
    reaction(
      () => counterStore.count,
      (current, pervious) => {
        console.log(current, pervious)
      }
    )
  }, [])
  return (
    <div>
      <button onClick={counterStore.increment}>累加</button>
      <span>{counterStore.count}</span>
      <button onClick={counterStore.reset}>重置</button>
      <div>
        <span>{counterStore.person.name}</span>
        <button onClick={() => runInAction(() => counterStore.person.name = "王五")}>换人</button>
      </div>
      <div>
        <span>{counterStore.person.name}</span>
        <button onClick={() => runInAction(() => counterStore.person = { name: "麻子" })}>换地址</button>
      </div>
    </div>
  )
}

export default observer(Counter)
