import React from "react"
import { navigate } from "gatsby"
import { useGetUserQuery } from "../store/services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { data, isLoading } = useGetUserQuery(null, {
    skip: !localStorage.token,
  })
  if (isLoading) return null
  if (data) return <Component {...rest} />
  navigate("/login")
  return null
}

export default PrivateRoute
