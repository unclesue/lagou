import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const primaryColor = (props) => css`
  color: ${props.colors.primary};
`;

function Demo() {
  return (
    <div css={primaryColor}>
      主色调
      <Foo />
    </div>
  );
}

function Foo() {
  const theme = useTheme();
  return <div css={{ color: theme.colors.success }}>使用钩子函数获取主题</div>;
}

export default Demo;
