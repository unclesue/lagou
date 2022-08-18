import styled from "@emotion/styled"

const Container = styled.div`
  width: 200px;
  height: 120px;
  background: skyblue;
  color: white;
  &:hover {
    background: pink;
    color: black;
  }
  & > span {
    color: blue
  }
`

function Demo() {
  return <Container>
    container
    <span>span</span>
  </Container>
}

export default Demo
