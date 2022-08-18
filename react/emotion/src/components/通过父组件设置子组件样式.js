import styled from "@emotion/styled"

// const Child = styled.div`
//   color: green
// `

// const Parent = styled.div`
//   ${Child} {
//     color: blue;
//     font-size: 28px
//   }
//   background: tomato;
// `

const Child = styled.div({
  color: "green"
})

const Parent = styled.div({
  [Child]: {
    color: "blue",
    fontSize: 28
  },
  background: "tomato"
})

function Demo() {
  return <div>
    <Child>child component</Child>
    <Parent>
      <Child>parent child component</Child>
    </Parent>
  </div>
}

export default Demo
