import { css } from "@emotion/react"

const base = css`
  color: white;
  background: tomato;
`

const danger = css`
  background: red;
`

function Demo() {
  return <button css={[base, danger]}>在样式组合中，后调用的样式优先级高于先调用的样式。</button>
}

export default Demo
