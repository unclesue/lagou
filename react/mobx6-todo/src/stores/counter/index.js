import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 10;
  person = { name: "李四" }
  constructor() {
    // overrides: 覆盖默认设置，将对象中的某些属性或方法设置为普通属性或方法
    // options: 配置对象，autoBind 使action方法拥有正确的this指向
    makeAutoObservable(this, { reset: true }, { autoBind: true })
  }
  increment() {
    this.count += 1
  }
  reset() {
    // 配置了overrides.reset=false，此处的this就是undefined
    this.count = 0
  }
}

export default CounterStore
