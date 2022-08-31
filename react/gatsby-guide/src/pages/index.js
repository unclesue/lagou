import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return <div>
    Hello world!
    <div>
      <Link to="/persons/zhangsan">zhangsan</Link>
      &nbsp;&nbsp;
      <Link to="/persons/lisi">lisi</Link>
    </div>
  </div>
}
