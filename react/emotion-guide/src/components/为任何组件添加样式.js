import styled from "@emotion/styled";

function Demo({ className }) {
  return <div className={className}>为任何组件添加样式</div>;
}

const Fancy = styled(Demo)`
  background: tomato;
  color: white;
  font-weight: 700;
`;

const Fancy2 = styled(Demo)({
  background: "#dedede",
  color: "white",
  fontWeight: 700,
});

function Test() {
  return (
    <div>
      <Fancy />
      <Fancy2 />
    </div>
  );
}

export default Test;
