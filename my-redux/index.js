function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error("reducer must be a function.");
  }
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error("reducer must be a function.");
    }
    return enhancer(createStore)(reducer, preloadedState)
  }
  let currentState = preloadedState;
  const listeners = [];
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    // action必须是对象
    if (!isPlainObject(action)) throw new Error("action must be a object.");
    // action必须具有type属性
    if (typeof action.type === "undefined")
      throw new Error("action must has type attribute.");
    currentState = reducer(currentState, action);
    listeners.forEach((listener) => listener());
  }
  function subscribe(listener) {
    listeners.push(listener);
  }
  return { getState, dispatch, subscribe };
}

function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
