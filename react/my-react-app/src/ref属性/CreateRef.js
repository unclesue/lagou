import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => console.log(this.inputRef.current)}>
          button
        </button>
      </div>
    );
  }
}

export default App;
