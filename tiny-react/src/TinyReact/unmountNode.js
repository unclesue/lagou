export default function unmountNode(node) {
  const virtualDOM = node._virtualDOM
  // 文本节点直接删除
  if (virtualDOM.type === 'text') {
    node.remove()
    return
  }
  if (virtualDOM.component) {
    virtualDOM.component.componentWillUnmount()
  }
  // 删除ref属性
  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(null)
  }
  // 删除节点事件
  Object.keys(virtualDOM.props).forEach(propName => {
    if (propName.slice(0, 2) === "on") {
      const eventName = propName.toLowerCase().slice(0, 2)
      const eventHandler = virtualDOM.props[propName]
      node.removeEventListener(eventName, eventHandler)
    }
  })
  // 递归删除自子节点
  if (node.children.length) {
    for (let i = 0; i < node.children.length; i++) {
      const element = array[i];
      unmountNode(node.chileNodes[i])
      i--
    }
  }
  node.remove()
}
