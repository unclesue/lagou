import { useRef } from "react";

function TestUseRef() {
  const username = useRef()

  return (
    <div>
      <input ref={username}></input>
      <button onClick={() => username.current.focus()}>setFocus</button>
    </div>
  );
}

export default TestUseRef;
