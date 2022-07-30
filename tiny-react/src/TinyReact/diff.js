import createDOMElement from "./createDOMElement";
import isFunction from "./isFunction";
import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";
import updateTextNode from "./updateTextNode";
import unmountNode from "./unmountNode"
import diffComponent from "./diffComponent";

export default function diff(virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;
  const oldComponent = oldVirtualDOM && oldVirtualDOM.component
  // 判断 oldDOM 是否存在
  if (!oldDOM) {
    mountElement(virtualDOM, container);
  } else if (
    oldVirtualDOM &&
    // 如果要比对的两个节点类型不相同
    virtualDOM.type !== oldVirtualDOM.type &&
    // 并且节点类型不是组件
    !isFunction(virtualDOM)
  ) {
    // 不需要对比
    // 使用新的 virtualDOM 对象生成真实 DOM 对象
    const newElement = createDOMElement(virtualDOM);
    // 使用新的 DOM 对象替换旧的 DOM 对象
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (isFunction(virtualDOM)) {
    // 组件
    diffComponent(virtualDOM, oldComponent, oldDOM, container)
  } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
    // 类型相同
    if (virtualDOM.type === "text") {
      // 更新文本节点
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM);
    } else {
      // 更新元素节点
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
    }

    // 1. 将拥有key属性的子元素放置在一个单独的对象中
    const keyedElements = {}
    for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
      const domElement = oldDOM.childNodes[i]
      if (domElement.nodeType === 1) {
        const key = domElement.getAttribute("key")
        if (key) {
          keyedElements[key] = domElement
        }
      }
    }

    const hasNoKey = Object.keys(keyedElements).length === 0
    if (hasNoKey) {
      // 递归对比子节点
      virtualDOM.children.forEach((child, i) => {
        diff(child, oldDOM, oldDOM.childNodes[i]);
      });
    } else {
      // 2. 循环virtualDom的子元素，获取子元素的key属性
      virtualDOM.children.forEach((child, i) => {
        const key = child.props.key || null
        if (key) {
          const domElement = keyedElements[key]
          if (domElement) {
            // 3. 看看当前位置的元素是不是我们期望的元素
            if (oldDOM.childNodes[i] && domElement !== oldDOM.childNodes[i]) {
              oldDOM.insertBefore(domElement, oldDOM.childNodes[i])
            }
          } else {
            mountElement(child, oldDOM, oldDOM.childNodes[i])
          }
        }
      })
    }

    // 删除节点
    const oldChildrenNodes = oldDOM.childNodes;
    if (oldChildrenNodes.length > virtualDOM.children.length) {
      if (hasNoKey) {
        for (
          let i = oldChildrenNodes.length - 1;
          i > virtualDOM.children.length - 1;
          i--
        ) {
          unmountNode(oldChildrenNodes[i]);
        }
      } else {
        // 通过key属性删除节点
        for (let i = 0; i < oldChildrenNodes.length; i++) {
          let oldChild = oldChildrenNodes[i]
          // 此处如果用oldChild.getAttribute("key")获取key，需要转换为数字
          let oldChildKey = oldChild._virtualDOM.props.key
          let found = false
          for (let n = 0; n < virtualDOM.children.length; n++) {
            if (oldChildKey === virtualDOM.children[n].props.key) {
              found = true
              break
            }
          }
          if (!found) {
            unmountNode(oldChild)
          }
        }
      }
    }
  }
}
