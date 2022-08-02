import React, { Component } from "./react"
import { render } from "./react/reconciliation"

const root = document.getElementById("root")

const jsx = (
  <div>
    <p>Hello React</p>
    <p>Hi Fiber</p>
  </div>
)
// render(jsx, root)

// setTimeout(() => {
//   const jsx = (
//     <div>
//       <p>Hi Fiber</p>
//     </div>
//   )
//   render(jsx, root)
// }, 2000);

class Greating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "张三"
    }
  }
  render() {
    return (
      <div>
        <p>props.title: {this.props.title}</p>
        <span>state.name: {this.state.name}</span>
        <button onClick={() => this.setState({ name: "李四" })}>点击修改state</button>
      </div>
    )
  }
}
render(<Greating title="study" />, root)

function Fn(props) {
  return (
    <div>{props.title} function component</div>
  )
}
// render(<Fn title="study" />, root)
