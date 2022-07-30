import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

export default function mountNativeElement(virtualDOM, container, oldDOM) {
    let newElement = createDOMElement(virtualDOM)
    // 判断旧的DOM对象是否存在，如果存在，删除
    oldDOM && unmountNode(oldDOM)
    // 将转换之后的DOM对象挂载在页面中
    container.appendChild(newElement)
    // 获取类组件实例对象
    const component = virtualDOM.component
    // 将DOM对象存储在类组件实例对象中
    component && component.setDOM(newElement)
}
