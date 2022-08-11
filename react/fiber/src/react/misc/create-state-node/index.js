import { createDOMElement } from "../../dom";
import createReactInstance from "../create-react-instance";

const createStateNode = (fiber) => {
  if (fiber.tag === "host_component") {
    return createDOMElement(fiber);
  } else {
    return createReactInstance(fiber);
  }
};

export default createStateNode;
