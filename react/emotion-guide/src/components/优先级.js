import { css } from "@emotion/react";

const demoStyle = css`
  height: 150px;
  width: 150px;
  background: pink;
`;

const fooStyle = css`
  background: gray;
  font-size: 14px;
`;

function Demo() {
  return (
    <Foo css={fooStyle} />
  );
}

function Foo(props) {
  return (
    <div {...props} css={demoStyle}>
      props对象中的css属性优先级高于组件内部的css属性
    </div>
  );
}

export default Demo;
