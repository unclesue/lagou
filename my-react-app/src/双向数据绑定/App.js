import React, { Component } from "react";
import Person from "./Person";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "知道你" };
    this.nameChanged = this.nameChanged.bind(this);
  }
  nameChanged(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <Person name={this.state.name} changed={this.nameChanged} />
      </div>
    );
  }
}

export default App;
