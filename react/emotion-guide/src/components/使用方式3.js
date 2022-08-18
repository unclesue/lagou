import { css } from "@emotion/react";

const style = css({
  height: 150,
  width: 150,
  background: "green",
});
console.log(style);

function Demo() {
  return <div css={style}>Demo run.</div>;
}
export default Demo;
