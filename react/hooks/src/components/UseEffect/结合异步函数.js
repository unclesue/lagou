import { useEffect, useState } from "react";

function TestUseEffect() {
  // useEffect中的参数函数不能是异步函数，因为useEffect要返回清理资源的函数，如果是异步函数就返回了promise
  // 错误示例
  // useEffect(async () => {
  //   const res = await getData()
  //   console.log(res)
  // })
  // 使用自执行函数
  useEffect(() => {
    (async () => {
      const res = await getData()
      console.log(res)
    })()
  }, [])

  return (
    <div></div>
  );
}

function getData() {
  return new Promise(resolve => resolve({ msg: 'hello effect' }))
}

export default TestUseEffect;
