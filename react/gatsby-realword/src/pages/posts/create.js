import React, { useState } from 'react'
import { useAddPostMutation } from '../../store/services/posts'

export default function Create() {
  const initialValue = { title: '', content: '' }
  const [post, setPost] = useState(initialValue)
  const [addPost, { isLoading }] = useAddPostMutation()

  const handleChange = ({ target }) => {
    setPost((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addPost(post)
    setPost(initialValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            name="title"
            placeholder="New post title"
            type="text"
            onChange={handleChange}
            value={post.title}
          />
        </div>
        <div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Post'}
          </button>
        </div>
      </div>
    </form>
  )
}
