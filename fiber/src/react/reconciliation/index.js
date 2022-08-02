import { updateNodeElement } from "../dom";
import { arrified, createTaskQueue, createStateNode, getTag } from "../misc";

/**
 * 任务队列
 */
const taskQueue = createTaskQueue();
/**
 * 要执行的子任务
 */
let subTask = null;

let pendingCommit = null;

const getFirstTask = () => {
  /**
   * 从任务队列中获取任务
   */
  const task = taskQueue.pop();

  /**
   * 返回最外层节点的fiber对象
   */
  return {
    props: task.props,
    stateNode: task.dom,
    tag: "host_root",
    effects: [],
    child: null,
    alternate: task.dom.__rootfiberContainer
  };
};

const commitAllWork = (fiber) => {
  fiber.effects.forEach(item => {
    if (item.effectTag === "delete") {
      item.parent.stateNode.removeChild(item.stateNode)
    } else if (item.effectTag === "update") {
      if (item.type === item.alternate.type) {
        updateNodeElement(item.stateNode, item, item.alternate)
      } else {
        item.parent.stateNode.replaceChild(item.stateNode, item.alternate.stateNode)
      }
    } else if (item.effectTag === "placement") {
      let parentFiber = item.parent
      while(parentFiber.tag === "class_component" || parentFiber.tag === "function_component") {
        parentFiber = parentFiber.parent
      }
      if (item.tag === "host_component") {
        parentFiber.stateNode.appendChild(item.stateNode)
      }
    }
  })
  fiber.stateNode.__rootfiberContainer = fiber
}

const reconcileChildren = (fiber, children) => {
  const reconcileChildren = arrified(children);
  let index = 0;
  let element = null;
  let newFiber = null;
  let prevFiber = null;
  let alternate = null
  if (fiber.alternate && fiber.alternate.child) {
    alternate = fiber.alternate.child
  }
  while (index < reconcileChildren.length || alternate) {
    element = reconcileChildren[index];
    if (!element && alternate) {
      // 删除
      alternate.effectTag = "delete"
      fiber.effects.push(alternate)
    } else if (element && alternate) {
      // 更新
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element),
        effects: [],
        effectTag: "update",
        parent: fiber,
        alternate
      };
      if (element.type === alternate.type) {
        newFiber.stateNode = alternate.stateNode
      } else {
        newFiber.stateNode = createStateNode(newFiber)
      }
    } else if (element && !alternate) {
      // 新增
      newFiber = {
        type: element.type,
        props: element.props,
        tag: getTag(element),
        effects: [],
        effectTag: "placement",
        parent: fiber,
      };
      newFiber.stateNode = createStateNode(newFiber)
    }
    if (index === 0) {
      // 为父级添加子级
      fiber.child = newFiber;
    } else if (element) {
      // 为fiber添加下一个兄弟fiber
      prevFiber.sibling = newFiber;
    }

    if (alternate && alternate.sibling) {
      alternate = alternate.sibling
    } else {
      alternate = null
    }

    prevFiber = newFiber;
    index++;
  }
};

const executeTask = (fiber) => {
  if (fiber.tag === "class_component") {
    reconcileChildren(fiber, fiber.stateNode.render());
  } else if (fiber.tag === "function_component") {
    reconcileChildren(fiber, fiber.stateNode(fiber.props));
  } else {
    reconcileChildren(fiber, fiber.props.children);
  }
  if (fiber.child) {
    return fiber.child
  }
  let currentExecutelyFiber = fiber
  while (currentExecutelyFiber.parent) {
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(
      currentExecutelyFiber.effects.concat([currentExecutelyFiber])
    )
    if (currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling
    }
    currentExecutelyFiber = currentExecutelyFiber.parent
  }
  pendingCommit = currentExecutelyFiber
};

const workLoop = (deadline) => {
  /**
   * 如果子任务不存在 就去获取子任务
   */
  if (!subTask) {
    subTask = getFirstTask();
  }
  /**
   * 如果任务存在并且浏览器有空余时间就调用
   * executeTask 方法执行任务 接受任务 返回新的任务
   */
  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask);
  }

  commitAllWork(pendingCommit)
};

const performTask = (deadline) => {
  /**
   * 执行任务
   */
  workLoop(deadline);
  /**
   * 判断任务是否存在
   * 判断任务队列中是否还有任务没有执行
   * 再一次告诉浏览器在空闲的时间执行任务
   */
  if (subTask && !taskQueue.isEmpty()) {
    requestIdleCallback(performTask);
  }
};

export const render = (element, dom) => {
  /**
   * 1. 向任务队列中添加任务
   * 2. 指定在浏览器空闲时执行任务
   */
  /**
   * 任务就是通过 vdom 对象 构建 fiber 对象
   */
  taskQueue.push({
    dom,
    props: { children: element },
  });
  /**
   * 指定在浏览器空闲的时间去执行任务
   */
  requestIdleCallback(performTask);
};
