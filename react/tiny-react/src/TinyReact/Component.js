import diff from "./diff"

export default class Component {
  constructor(props) {
    this.props = props
  }
  setState(state) {
    this.state = Object.assign({}, this.state, state)
    // 获取最新的要渲染的virtualDOM对象
    let virtualDOM = this.render()
    // 获取旧的virtualDOM对象进行对比
    let oldDOM = this.getDOM()
    // 获取容器
    let container = oldDOM.parentNode
    // 实现对比
    diff(virtualDOM, container, oldDOM)
  }
  setDOM(dom) {
    this._dom = dom
  }
  getDOM() {
    return this._dom
  }
  updateProps(props) {
    this.props = props
  }
  // 生命周期
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}
}
