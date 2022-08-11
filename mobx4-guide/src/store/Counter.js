import { observable, action, configure, runInAction, flow, computed, autorun } from "mobx";
import axios from "axios";

// 通过配置强制程序使用action函数更改应用程序中的状态
configure({ enforceActions: "observed" });

class Counter {
  @observable count = 10;
  @observable users = [];
  @observable menus = [];
  @observable username = 'test';

  constructor() {
    autorun(() => {
      try {
        uniqueUsername(this.username)
        console.log('用户名合法')
      } catch (error) {
        console.log(error)
      }
    }, { delay: 2000 })
  }

  // increment = () => {
  //   this.count += 1
  // }
  // decrement = () => {
  //   this.count -= 1
  // }
  @action.bound increment() {
    this.count += 1;
  }
  @action.bound decrement() {
    this.count -= 1;
  }

  @action.bound async getData() {
    const { data } = await axios.get("https://api.github.com/users");
    runInAction(() => this.users = data)
  }
  getMenu = flow(function* () {
    const { data: { data } } = yield axios.post("http://23.36.250.247/api/duogui/menuManagement/getMenu?userId=398");
    this.menus = data
  }).bind(this)

  @computed get getResult() {
    return this.count ** 2
  }

  @action.bound changeUsername(username) {
    this.username = username
  }
}

function uniqueUsername(val) {
  return new Promise((resolve, reject) => {
    if (val === 'admin') {
      reject('用户名不合法')
    } else {
      resolve()
    }
  })
}

export default new Counter();
