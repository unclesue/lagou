import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Header() {
  // 非页面组件查询数据
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  return (
    <div>
      <p>{data.site.siteMetadata.author}</p>
      <p>{data.site.siteMetadata.title}</p>
    </div>
  )
}
