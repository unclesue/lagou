import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import PostAuthor from "./PostAuthor";
import { fetchPosts, selectPostById, selectPostIds } from "./postSlice";
import { ReactionButtons } from "./ReactionButtons";
import { TimeAgo } from "./TimeAgo";

const styles = {
  list: {
    border: "1px solid",
    padding: "10px",
    width: "30%"
  },
  detail: {
    padding: "10px",
    width: "70%"
  }
};

const PostExcerpt = ({postId, navigate}) => {
  const post = useSelector(state => selectPostById(state, postId))
  return (
    <article key={post.id}>
      <h3 onClick={() => navigate(`/posts/${post.id}`)}>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <br />
      <ReactionButtons post={post} />
      <br />
      <Link to={`/posts/${post.id}`}>view detail</Link>
    </article>
  )
}

export default function PostsList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderedPostIds = useSelector(selectPostIds)
  const postStatus = useSelector(state => state.posts.status)
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content
  if (postStatus === "loading") {
    content = <Spinner text="Loading..." />
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map(postId => (
      <PostExcerpt key={postId} postId={postId} navigate={navigate} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex" }}>
        <div style={styles.list}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2>Posts List</h2>

            <Link to={`/posts/add`}>add post</Link>
          </div>
          {content}
        </div>
        <div style={styles.detail}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
