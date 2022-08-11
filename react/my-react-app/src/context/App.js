import { Component } from "react";
import { UserProvider } from "./userContext";
import A from "./A";
import B from "./B";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "App" };
  }
  render() {
    return (
      <div>
        <UserProvider value="hello context">
          <A name="zhangsan" age="22" />
          <B />
        </UserProvider>
      </div>
    );
  }
}

export default App;
