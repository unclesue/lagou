const isObject = (val) => val !== null && typeof val === "object";

export function reactive(target) {
  if (!isObject(target)) return target;
  const handler = {
    get(target, key, receiver) {
      console.log("收集依赖");
      return Reflect.get(target, key, receiver);
    },
    set(target, key, val, receiver) {
      console.log("触发更新");
      return Reflect.set(target, key, val, receiver);
    },
    deleteProperty(target, key) {
      console.log("删除：触发更新");
      return Reflect.deleteProperty(target, key);
    },
  };
  return new Proxy(target, handler)
}
