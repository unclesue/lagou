export default function createReactInstance(fiber) {
  if (fiber.tag === "class_component") {
    return new fiber.type(fiber.props)
  } else {
    return fiber.type
  }
}
