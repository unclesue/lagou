const React = require("react")
const { rootStore } = require("./src/store/store")
const { Provider } = require("react-redux")
const Layout = require("./src/components/layout").default

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
  return <Provider store={rootStore}>{element}</Provider>
}
