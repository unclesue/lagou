import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

export default function mountNativeElement(virtualDOM, container, oldDOM) {
    let newElement = createDOMElement(virtualDOM)
    // 将转换之后的DOM对象挂载在页面中
    if (oldDOM) {
      console.log(oldDOM, 'oldDOM')
      container.insertBefore(newElement, oldDOM)
    } else {
      container.appendChild(newElement)
    }
    // 判断旧的DOM对象是否存在，如果存在，删除 TODO: 此处有bug
    oldDOM && unmountNode(oldDOM)
    // 获取类组件实例对象
    const component = virtualDOM.component
    // 将DOM对象存储在类组件实例对象中
    component && component.setDOM(newElement)
}
