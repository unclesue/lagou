const fs = require("fs");
const path = require("path");
const vm = require("vm");

function Module(id) {
  this.id = id;
  this.exports = {};
}

Module.prototype.load = function () {
  const extname = path.extname(this.id);

  Module._extensions[extname](this);
};

Module._wrapper = [
  "(function(exports, require, module, __filename, __dirname) {",
  "})",
];

Module._resolveFilename = function (filename) {
  const absolutePath = path.resolve(__dirname, filename);
  if (fs.existsSync(absolutePath)) {
    return absolutePath;
  } else {
    const extensions = Object.keys(Module._extensions);
    for (let index = 0; index < extensions.length; index++) {
      const newPath = absolutePath + extensions[index];
      if (fs.existsSync(newPath)) return newPath;
    }
  }
  throw new Error(`${path} is not exists.`);
};

Module._extensions = {
  ".js"(module) {
    let content = fs.readFileSync(module.id, "utf-8");

    content = Module._wrapper[0] + content + Module._wrapper[1];

    const compileFn = vm.runInThisContext(content);

    const exports = module.exports;
    const filename = module.id;
    const dirname = path.dirname(filename);

    compileFn.call(exports, exports, myRequire, module, filename, dirname);
  },
  ".json"(module) {
    let content = JSON.parse(fs.readFileSync(module.id, 'utf-8'))

    module.exports = content
  },
};

Module._cache = {};

function myRequire(filename) {
  // 1.获取绝对路径
  const absolutePath = Module._resolveFilename(filename);

  // 2.缓存优先
  if (Module._cache[absolutePath]) return Module._cache[absolutePath].exports;

  // 3.加载新对象
  const module = new Module(absolutePath);

  // 4.缓存已加载的模块
  Module._cache[absolutePath] = module;

  // 5.执行加载
  module.load();

  // 6.返回数据
  return module.exports;
}

const m = myRequire("../package.json");
console.log("m", m);
