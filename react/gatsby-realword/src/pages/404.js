import React from 'react'
import Article from '../templates/article-detail'

export default function NotFound({ location }) {
  const pathname = location.pathname
  if (pathname.startsWith('/articles')) {
    const slug = pathname.substr(10)
    return <Article slug={slug} />
  }
  return <div>NotFound</div>
}
