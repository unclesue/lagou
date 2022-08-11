import { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log(this.username.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref={val => this.username = val} />
      </form>
    );
  }
}

export default App;
