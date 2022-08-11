import { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = { username: "" };
    this.nameChanged = this.nameChanged.bind(this);
  }

  nameChanged(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <form>
        <p>{this.state.username}</p>
        <input
          type="text"
          value={this.state.username}
          onChange={this.nameChanged}
        />
      </form>
    );
  }
}

export default App