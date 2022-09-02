import { Link } from "gatsby"
import React from "react"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.less"

export default function Home() {
  return <div>
    <Seo title="ceshi" lang="zh" meta={[{ name: "ceshi", content: "ceshi123" }]} />
    Hello world!
    <div>
      <Link className={styles.red} to="/persons/zhangsan">zhangsan</Link>
      &nbsp;&nbsp;
      <Link to="/persons/lisi">lisi</Link>
    </div>
  </div>
}
