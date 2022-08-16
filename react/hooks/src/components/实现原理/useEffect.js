
let state = [];
let setters = [];
let stateIndex = 0;
let root = null

function createSetter(index) {
  return function setter(newState) {
    state[index] = newState;
    render();
  };
}

function useState(initialState) {
  state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState;
  setters[stateIndex] = setters[stateIndex] ? setters[stateIndex] : createSetter(stateIndex);
  let value = state[stateIndex]
  let setter = setters[stateIndex]
  stateIndex++;
  return [
    value,
    setter
  ]
}

function render() {
  root.render(<TestUseEffect root={root} />)
  stateIndex = 0
  effectIndex = 0
}

let prevDepsArray = []
let effectIndex = 0
function useEffect(callback, depsArray) {
  if (Object.prototype.toString.call(callback) !== '[object Function]') {
    throw new Error("useEffect函数的第一个参数必须是函数")
  }
  if (typeof depsArray === 'undefined') {
    callback()
  } else {
    if (Object.prototype.toString.call(depsArray) !== '[object Array]') {
      throw new Error("useEffect函数的第二个参数必须是数组")
    }
    let prevDeps = prevDepsArray[effectIndex]
    if (prevDeps && prevDeps.every((item, index) => item !== depsArray[index])) {
      callback()
    }
    prevDepsArray[effectIndex] = depsArray
    effectIndex++
  }
}

function TestUseEffect(props) {
  root = props.root
  const [count, setCount] = useState(0);
  const [name, setName] = useState("vue");
  useEffect(() => {
    console.log('hello')
  }, [count])
  useEffect(() => {
    console.log('world')
  }, [name])
  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>setCount</button>
      </div>
      <div>
        <span>{name}</span>
        <button onClick={() => setName("react" + Math.random())}>setName</button>
      </div>
    </div>
  );
}

export default TestUseEffect;
