import React, { useState } from "react"
import { useGetPostsQuery } from "../../store/services/posts"
import Create from "./create"
import { PostDetail } from "./detail"

const PostListItem = ({ data: { attributes, id }, setPostId }) => {
  return (
    <li>
      <span onClick={() => setPostId(id)}>{attributes.title}</span>
    </li>
  )
}

const PostList = (props) => {
  const { data: posts, isLoading } = useGetPostsQuery()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (!posts) {
    return <div>No posts :(</div>
  }

  return (
    <div>
      {posts.map(post => (
        <PostListItem key={post.id} data={post} {...props} />
      ))}
    </div>
  )
}

export default function Posts() {
  const [postId, setPostId] = useState(0)
  return (
    <div style={{ padding: 10 }}>
      <h3>Posts {postId}</h3>
      <hr />
      <div style={{display: "flex"}}>
        <div style={{width: "20%"}}>
          <Create />
          <hr />
          Posts:
          <PostList setPostId={setPostId} />
          <hr />
          List with duplicate subscription:
          <PostList setPostId={setPostId} />
        </div>
        <div>
          <PostDetail postId={postId} />
        </div>
      </div>
    </div>
  )
}
