import React from "react";
import Input from "./Input";

class App extends React.Component {
  constructor() {
    super();
    this.InputComponentRef = React.createRef();
  }
  render() {
    return (
      <div className="App">
        <Input ref={this.InputComponentRef} />
        <button onClick={() => this.InputComponentRef.current.focusInput()}>
          button
        </button>
      </div>
    );
  }
}

export default App;