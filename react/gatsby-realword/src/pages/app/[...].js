import React from "react"
import { Router } from "@reach/router"
import Create from "../../components/article/create"
import Setting from "../../components/person/setting"
import PrivateRoute from "../../components/private-route"

export default function App() {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/create" component={Create} />
      <PrivateRoute path="/setting" component={Setting} />
    </Router>
  )
}
