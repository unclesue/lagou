import React from "react"
import { useGetUserQuery } from "../store/services/auth"

export default function Header() {
  const token = localStorage.token
  const { data } = useGetUserQuery(null, { skip: !token })
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" class when you're on that page" */}
            <a className="nav-link active">Home</a>
          </li>
          {data ? <Login user={data.user} /> : <Logout />}
        </ul>
      </div>
    </nav>
  )
}

const Login = ({ user }) => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link">
          <i className="ion-compose" />
          &nbsp;New Article
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">
          <i className="ion-gear-a" />
          &nbsp;Settings
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link">{user.username}</a>
      </li>
    </>
  )
}

const Logout = () => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link">Sign in</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Sign up</a>
      </li>
    </>
  )
}
