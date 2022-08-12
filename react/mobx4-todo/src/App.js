import React, { Component } from "react";
import Add from "./views/todo/Add";
import Extra from "./views/todo/Extra";
import List from "./views/todo/List";

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <Add />
        <List />
        <Extra />
      </section>
    );
  }
}

export default App;
