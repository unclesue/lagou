const isObject = (val) => val !== null && typeof val === "object";
const convert = (target) => (isObject(target) ? reactive(target) : target);
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (target, key) => hasOwnProperty.call(target, key);

export function reactive(target) {
  if (!isObject(target)) return target;
  const handler = {
    get(target, key, receiver) {
      track(target, key);
      const result = Reflect.get(target, key, receiver);
      return convert(result);
    },
    set(target, key, val, receiver) {
      let oldValue = Reflect.get(target, key, receiver);
      let result = true;
      if (oldValue !== val) {
        result = Reflect.set(target, key, val, receiver);
        trigger(target, key);
      }
      return result;
    },
    deleteProperty(target, key) {
      const hasKey = hasOwn(target, key)
      const result = Reflect.deleteProperty(target, key);
      if (hasKey && result) {
        trigger(target, key)
      }
      return result
    },
  };
  return new Proxy(target, handler);
}

let activeEffect = null;
export function effect(callback) {
  activeEffect = callback;
  callback();
  activeEffect = null;
}

let targetMap = new WeakMap();
export function track(target, key) {
  if (!activeEffect) return;
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  dep.add(activeEffect);
}

export function trigger(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) return;
  let dep = depsMap.get(key);
  dep &&
    dep.forEach((effect) => {
      effect();
    });
}
