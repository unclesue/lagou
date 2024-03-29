function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error("reducer must be a function.");
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error("enhancer must be a function.");
    }
    return enhancer(createStore)(reducer, preloadedState);
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

function applyMiddleware(...middlewares) {
  return function enhancer(createStore) {
    return function (reducer, preloadedState) {
      const store = createStore(reducer, preloadedState);
      const middlewareApi = {
        dispatch: store.dispatch,
        getState: store.getState,
      };
      const chain = middlewares.map((middleware) => middleware(middlewareApi));
      const dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
}

function compose() {
  const funcs = [...arguments];
  return function (dispatch) {
    for (let i = funcs.length - 1; i >= 0; i--) {
      dispatch = funcs[i](dispatch);
    }
    return dispatch;
  };
}

function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};
  // for (const key in actionCreators) {
  //   boundActionCreators[key] = function () {
  //     dispatch(actionCreators[key]());
  //   };
  // }
  for (var key in actionCreators) {
    (function(key){
      boundActionCreators[key] = function () {
        dispatch(actionCreators[key]());
      };
    })(key)
  }
  return boundActionCreators;
}

function combineReducers(reducers) {
  const keys = Object.keys(reducers)
  keys.forEach(key => {
    if (typeof reducers[key] !== 'function') {
      throw new Error("reducer must be a function.");
    }
  })
  return (state, action) => {
    let newState = {}
    keys.forEach(key => {
      newState[key] = reducers[key](state[key], action)
    })
    return newState
  }
}
