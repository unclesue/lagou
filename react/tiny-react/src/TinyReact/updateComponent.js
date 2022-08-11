import diff from "./diff"

export default function updateComponent(virtualDOM, oldComponent, oldDOM, container) {
  oldComponent.componentWillReceiveProps(virtualDOM.props)
  if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
    // 未更新前的props
    const prevProps = oldComponent.props
    oldComponent.componentWillUpdate(virtualDOM.props)
    // 组件更新
    oldComponent.updateProps(virtualDOM.props)
    // 获取组件最新的virtuDOM
    const nextVirtualDOM = oldComponent.render()
    // 更新component组件实例对象
    nextVirtualDOM.component = oldComponent
    // 比对
    diff(nextVirtualDOM, container, oldDOM)
    oldComponent.componentDidUpdate(prevProps)
  }
}
