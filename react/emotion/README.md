# vscode可能会报错，按需修改以下文件

```
// node_modules/babel-preset-react-app/index.js
const env = process.env.BABEL_ENV || process.env.NODE_ENV || 'development';