import React from "./react"
import { render } from "./react/reconciliation"

const root = document.getElementById("root")

const jsx = (
  <div>
    <p>Hello React</p>
    <p>Hi Fiber</p>
  </div>
)

render(jsx, root)
