import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={(input) => (this.input = input)} />
        <button onClick={() => console.log(this.input)}>button</button>
      </div>
    );
  }
}

export default App;
