import styled from "@emotion/styled"

const Button = styled.button`
  height: 30px;
  width: 120px;
  color: skyblue;
`

function Demo() {
  return <div>
    <Button>Button</Button>
    <Button as="a" href="#">Button</Button>
  </div>
}

export default Demo
