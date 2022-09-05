import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "./usersSlice";
import { selectPostsByUser } from "../posts/postSlice";

export default function UserPage() {
  const params = useParams();
  const user = useSelector((state) => selectUserById(state, params.userId));
  const postsForUser = useSelector((state) => selectPostsByUser(state, params.userId));
  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  );
}

