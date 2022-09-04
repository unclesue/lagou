import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import { selectPostById } from "./postSlice";

export default function SinglePostPage() {
  const params = useParams();
  const post = useSelector(state => selectPostById(state, params.postId));

  if (!post) {
    return (
      <section>
        <h2>页面未找到！</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} /><br />
        <Link to={`/posts/${post.id}/edit`}>edit post</Link>
      </article>
    </section>
  );
}
