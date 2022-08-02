import React, { Component } from "./react"
import { render } from "./react/reconciliation"

const root = document.getElementById("root")

const jsx = (
  <div>
    <p>Hello React</p>
    <p>Hi Fiber</p>
  </div>
)
render(jsx, root)

setTimeout(() => {
  const jsx = (
    <div>
      <p>Hi Fiber</p>
    </div>
  )
  render(jsx, root)
}, 2000);

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
        <p>node-1</p>
        <span>node-2</span>
      </div>
    )
  }
}
// render(<Greating title="study" />, root)

function Fn(props) {
  return (
    <div>{props.title} function component</div>
  )
}
// render(<Fn title="study" />, root)
