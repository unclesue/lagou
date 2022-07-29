export default function updateNodeElement(newElement, virtualDOM) {
  const props = virtualDOM.props;
  Object.keys(props).forEach((propName) => {
    const propValue = props[propName];
    if (propName.slice(0, 2) === "on") {
      const eventName = propName.toLowerCase().slice(2);
      newElement.addEventListener(eventName, propValue);
    } else if (propName === "checked" || propName === "value") {
      newElement[propName] = propValue;
    } else if (propName !== "children") {
      newElement.setAttribute(
        propName === "className" ? "class" : propName,
        propValue
      );
    }
  });
}
