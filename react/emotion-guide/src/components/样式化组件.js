import styled from "@emotion/styled"

const Button = styled.button`
  height: 30px;
  width: 120px;
`

const Container = styled.div({
  width: 1200,
  margin: '0 auto',
  background: '#f2f2f2',
})

function Demo() {
  return <Container>
    <Button>我是安邦</Button>
  </Container>
}

export default Demo
