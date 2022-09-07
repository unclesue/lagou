import React from "react"
import { useGetPostsQuery } from "../../store/services/posts"

const PostListItem = ({ data: { attributes, id }, onSelect }) => {
  return (
    <li>
      <span>{attributes.title}</span>
    </li>
  )
}

const PostList = () => {
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
        <PostListItem key={post.id} data={post} />
      ))}
    </div>
  )
}

export default function Posts() {
  return (
    <div>
      <h3>Posts</h3>
      <hr />
      <div>
        <div>
          {/* <AddPost /> */}
          {/* <hr /> */}
          Posts:
          <PostList />
          <hr />
          List with duplicate subscription:
          <PostList />
        </div>
        {/* <div className="column column-3 text-left">
          <Routes>
            <Route path="/:id" element={<PostDetail />} />
          </Routes>
        </div> */}
      </div>
    </div>
  )
}
