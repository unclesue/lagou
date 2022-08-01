import createDOMElement from "../../dom/create-dom-element";

const createStateNode = (fiber) => {
  if (fiber.tag === "host_component") {
    return createDOMElement(fiber)
  }
}

export default createStateNode
