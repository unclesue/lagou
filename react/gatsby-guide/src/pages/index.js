import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return <div>
    Hello world!
    <div>
      <Link to="/person/zhangsan">zhangsan</Link>
      &nbsp;&nbsp;
      <Link to="/person/lisi">lisi</Link>
    </div>
  </div>
}
