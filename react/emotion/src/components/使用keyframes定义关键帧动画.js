import { css, keyframes } from "@emotion/react";

const move = keyframes`
  0% {
    left: 10px;
    top: 10px;
    background: blue;
  }
  100% {
    left: 600px;
    top: 600px;
    background: skyblue;
  }
`;
const box = css`
  position: absolute;
  height: 100px;
  width: 100px;
  animation: ${move} 2s ease infinite alternate;
`;

function Demo() {
  return <div css={box}>动起来</div>;
}

export default Demo;
