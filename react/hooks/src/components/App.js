// import TestUseContext from "./UseContext";
import TestUseEffect from "./UseEffect/结合异步函数";
// import TestUseReducer from "./UseReducer";
// import TestUseState from "./UseState";

function App({ root }) {
  return (
    <div className="App">
      <TestUseEffect root={root} />
    </div>
  );
}

export default App;
