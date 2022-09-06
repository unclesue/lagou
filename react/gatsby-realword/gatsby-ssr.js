const React = require("react")
const { rootStore } = require("./src/store/store")
const { Provider } = require("react-redux")

exports.wrapRootElement = ({ element }) => {
  return <Provider store={rootStore}>{element}</Provider>
}
