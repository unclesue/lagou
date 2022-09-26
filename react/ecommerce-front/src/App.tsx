import React from "react";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  return <div>App {JSON.stringify(state)}</div>;
}

export default App;
