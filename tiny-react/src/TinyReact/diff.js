import createDOMElement from "./createDOMElement";
import isFunction from "./isFunction";
import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";
import updateTextNode from "./updateTextNode";
import unmountNode from "./unmountNode"

export default function diff(virtualDOM, container, oldDOM) {
  const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;
  if (!oldDOM) {
    mountElement(virtualDOM, container);
  } else if (
    oldVirtualDOM &&
    virtualDOM.type !== oldVirtualDOM.type &&
    !isFunction(virtualDOM)
  ) {
    // 类型不相同
    const newElement = createDOMElement(virtualDOM);
    oldDOM.parentNode.replaceChild(newElement, oldDOM);
  } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
    // 类型相同
    if (virtualDOM.type === "text") {
      // 更新文本节点
      updateTextNode(virtualDOM, oldVirtualDOM, oldDOM);
    } else {
      // 更新元素节点
      updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
    }
    // 递归对比子节点
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i]);
    });
    // 删除节点
    const oldChildrenNodes = oldDOM.childNodes;
    if (oldChildrenNodes.length > virtualDOM.children.length) {
      for (
        let i = oldChildrenNodes.length - 1;
        i > virtualDOM.children.length - 1;
        i--
      ) {
        unmountNode(oldChildrenNodes[i]);
      }
    }
  }
}
