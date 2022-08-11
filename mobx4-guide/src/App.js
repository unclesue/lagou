import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("counter")
@observer
class App extends Component {
  componentDidMount() {
    // const { counter } = this.props;
    // counter.getMenu();
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        {/* <button onClick={() => (counter.count = counter.count + 2)}>+1</button> */}
        <button onClick={counter.increment}>+1</button>
        <span>{counter.count}</span>
        <button onClick={counter.decrement}>-1</button>
        <span>{counter.getResult}</span>
        {/* {counter.menus.map((item) => (
          <div key={item.path}>{item.meta.title}</div>
        ))} */}
        <div>
          <input value={counter.username} onChange={(e) => counter.changeUsername(e.target.value)} />
        </div>
      </div>
    );
  }
}

export default App;
