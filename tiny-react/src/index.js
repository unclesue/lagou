import TinyReact from "./TinyReact";

const root = document.getElementById("root");

const virtualDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div data-show="true">2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
);

const modifyDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test-123">(编码必杀技2222)</h2>
    <div>嵌套1</div>
    <h3>(观察: 这个将会被改变3333)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div data-show="">2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好!!!")}>点击我</button>
    2, 3, 5
    <input type="text" />
  </div>
);

// TinyReact.render(virtualDOM, root)

// setTimeout(() => {
//   TinyReact.render(modifyDOM, root)
// }, 2000)

class Ceshi extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = { title: "default title" };
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle() {
    this.setState({ title: "change title" });
  }
  componentWillReceiveProps(props) {
    console.log("componentWillReceiveProps", props);
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }
  render() {
    return (
      <div>
        {/* <p onClick={() => console.log(this)}>姓名：{this.props.name}</p>
        <p>年龄：{this.props.age}</p>
        <Person></Person>
        <p>{this.state.title}</p>
        <button onClick={this.changeTitle}>改变title</button>
        <input type="text" ref={input => this.input = input}></input>
        <button type="text" onClick={() => console.log(this.input)}>打印input</button> */}
        {this.props.children}
      </div>
    );
  }
}

class DemoRef extends TinyReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: "张三", id: 1 },
        { name: "李四", id: 2 },
        { name: "网二", id: 3 },
        { name: "码子", id: 4 },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('click')
    const newState = JSON.parse(JSON.stringify(this.state));
    // newState.persons.splice(1, 0, { id: 5, name: "李欣" });
    newState.persons.pop()
    this.setState(newState);
  }
  render() {
    return (
      <div>
        <div>
          {this.state.persons.map((person) => (
            <p key={person.id}>{person.name}</p>
          ))}
        </div>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    );
  }
}

function Monkey() {
  return <div>monkey</div>;
}

function Person() {
  return (
    <div>
      hello <Monkey />
    </div>
  );
}

function Heart(props) {
  return (
    <div>
      &hearts; {props.title}
      <Person />
    </div>
  );
}

TinyReact.render(<DemoRef />, root);
