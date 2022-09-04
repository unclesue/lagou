import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <section>
        <Link to="/">Counter</Link>
        &nbsp;&nbsp;
        <Link to="/posts">Posts</Link>
      </section>
    </nav>
  )
}
