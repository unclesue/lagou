export default function updateNodeElement(newElement, virtualDOM, oldVirtualDOM = {}) {
  const newProps = virtualDOM.props;
  const oldProps = oldVirtualDOM.props || {};

  if (virtualDOM.type === "text") {
    if (newProps.textContent !== oldProps.textContent) {
      if (virtualDOM.parent.type !== oldVirtualDOM.parent.type) {
        virtualDOM.parent.stateNode.appendChild(
          document.createTextNode(newProps.textContent),
        )
      } else {
        virtualDOM.parent.stateNode.replaceChild(
          document.createTextNode(newProps.textContent),
          oldVirtualDOM.stateNode
        )
      }
    }
    return
  }

  Object.keys(newProps).forEach((propName) => {
    const newPropValue = newProps[propName];
    const oldPropValue = oldProps[propName];
    if (newPropValue !== oldPropValue) {
      if (propName.slice(0, 2) === "on") {
        const eventName = propName.toLowerCase().slice(2);
        newElement.addEventListener(eventName, newPropValue);
        // 移除旧的事件
        oldVirtualDOM && newElement.removeEventListener(eventName, oldPropValue);
      } else if (propName === "checked" || propName === "value") {
        newElement[propName] = newPropValue;
      } else if (propName !== "children") {
        newElement.setAttribute(
          propName === "className" ? "class" : propName,
          newPropValue
        );
      }
    }
  });
  // 判断属性被删除的情况
  Object.keys(oldProps).forEach((propName) => {
    const newPropValue = newProps[propName];
    const oldPropValue = oldProps[propName];
    if (!newPropValue) {
      if (propName.slice(0, 2) === "on") {
        const eventName = propName.toLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropValue);
      } else if (propName !== "children") {
        newElement.removeAttribute(propName);
      }
    }
  });
}
