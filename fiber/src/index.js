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
class Greating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "张三"
    }
  }
  render() {
    return (
      <div>{this.props.title} class component</div>
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
