import { Component } from "react";
import { UserConsumer } from "./userContext";

class A extends Component {

  constructor() {
    super()
    this.state = { name: 'lisi', age: 18 }
  }

  /**
   * 让组件在props变化时更新state
   * @param {*} props 父组件props
   * @param {*} state 当前组件状态
   * @returns 
   */
  static getDerivedStateFromProps(props, state) {
    return { name: props.name }
  }

  render() {
    return (
      <UserConsumer>
        {(val) => {
          return <div>A组件：{val} {this.state.age}</div>;
        }}
      </UserConsumer>
    )
  }
}

export default A;
