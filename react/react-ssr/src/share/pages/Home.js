import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return <div onClick={() => console.log(123)}>hello ssr.
  <Link to="/list">jump to list</Link>
  </div>
}
