import { useState } from "react"

export default function useInput(initalValue) {
  const [value, setVlaue] = useState(initalValue)
  return {
    input: {
      value,
      onChange: e => setVlaue(e.target.value),
    },
    setVlaue,
  }
}
