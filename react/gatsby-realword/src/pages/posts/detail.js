import * as React from "react"
import { useParams } from "react-router-dom"
import {
  useDeletePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
} from "../../store/services/posts"

const EditablePostName = ({
  post: { attributes, id },
  onUpdate,
  onCancel,
  loading = false,
}) => {
  const [name, setName] = React.useState(attributes.title)

  const handleChange = ({ target: { value } }) => setName(value)

  const handleSubmit = e => {
    e.preventDefault()
    onUpdate(name)
  }
  const handleCancel = () => onCancel()

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={name}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </button>
        <button onClick={handleCancel} disabled={loading}>
          Cancel
        </button>
      </form>
    </div>
  )
}

const PostJsonDetail = ({ id }) => {
  const { data: post } = useGetPostQuery(id)

  return (
    <div className="row" style={{ background: "#eee" }}>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  )
}

export const PostDetail = ({ postId: id }) => {
  const [isEditing, setIsEditing] = React.useState(false)

  const { data: post, isFetching, isLoading } = useGetPostQuery(id)

  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation()
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!post) {
    return <div>Missing post!</div>
  }

  return (
    <div>
      {isEditing ? (
        <EditablePostName
          post={post}
          onUpdate={title =>
            updatePost({ id, title })
              .then(result => {
                // handle the success!
                console.log("Update Result", result)
                setIsEditing(false)
              })
              .catch(error => console.error("Update Error", error))
          }
          onCancel={() => setIsEditing(false)}
          loading={isUpdating}
        />
      ) : (
        <React.Fragment>
          <div className="row">
            <div className="column">
              <h3>
                {post.attributes.name} {isFetching ? "...refetching" : ""}
              </h3>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              disabled={isDeleting || isUpdating}
            >
              {isUpdating ? "Updating..." : "Edit"}
            </button>
            <button onClick={() => deletePost(id)} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </React.Fragment>
      )}
      <PostJsonDetail id={id} />
    </div>
  )
}
