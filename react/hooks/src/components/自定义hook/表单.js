import { useState } from "react";

const useFormInput = (initialVlaue = '') => {
  const [value, setValue] = useState(initialVlaue)
  return {
    value,
    onChange: (event) => setValue(event.target.value)
  }
};

function TestCustomHook() {
  const username = useFormInput()
  const password = useFormInput()
  const type = useFormInput("option 1")
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username.value, password.value, type.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" {...username} />
      <input type="password" name="password" {...password} />
      <select name="type" {...type}>
        <option value="option 1">option 1</option>
        <option value="option 2">option 2</option>
      </select>
      <button type="submit">submit</button>
    </form>
  );
}

export default TestCustomHook;
