import styled from "@emotion/styled";

const Button = styled.button`
  height: 30px;
  width: 120px;
  background: ${(props) => props.bgColor || "pink"};
`;

const Container = styled.div((props) => ({
  width: props.width || 1200,
  margin: "0 auto",
  background: props.bgColor || "#f2f2f2",
}));

const Container2 = styled.div(
  {
    width: 1200,
    margin: "0 auto",
    background: "#f2f2f2",
  },
  (props) => ({
    width: props.width,
    margin: "0 auto",
    background: props.bgColor,
  })
);

function Demo() {
  return (
    <Container2 width={800} bgColor="tomato">
      <Button bgColor="skyblue">我是安邦</Button>
    </Container2>
  );
}

export default Demo;
