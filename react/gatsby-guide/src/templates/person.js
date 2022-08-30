import React from "react"

function Person({pageContext}) {
  return <>
    <h1>{pageContext.name}</h1>
    <h4>{pageContext.age}</h4>
  </>
}

export default Person
