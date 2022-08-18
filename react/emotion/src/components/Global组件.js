import { css, Global } from "@emotion/react"

const styles = css`
  body {
    color: white;
    font-size: 14px;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: skyblue;
  }
`

function Foo() {
  return <a href="/">Foo组件的a标签</a>
}

function Demo() {
  return <div>
    <Global styles={styles} />
    <a href="/">a标签</a><br />
    <Foo />
  </div>
}

export default Demo
