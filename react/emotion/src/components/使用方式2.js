import { css } from "@emotion/react"

const style = css`
height: 150px;
width: 150px;
background: pink
`
console.log(style)

function Demo() {
  return (
    <div css={style}>Demo run.</div>
  )
}
export default Demo
