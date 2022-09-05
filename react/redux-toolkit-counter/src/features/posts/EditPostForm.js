import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectPostById, postUpdated } from "./postSlice";

export default function EditPostForm() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const post = useSelector((state) => selectPostById(state, params.postId));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onSubmit = () => {
    if (!(title && content)) return;
    dispatch(postUpdated({ id: post.id, title, content }));
    navigate(`/posts/${post.id}`)
  };

  return (
    <section>
      <h2>更新帖子</h2>
      <form>
        <label htmlFor="postTitle">帖子标题:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">内容：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onSubmit}>
          保存帖子
        </button>
      </form>
    </section>
  );
}
