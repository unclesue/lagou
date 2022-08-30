import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

export default function List({ data }) {
  return (
    <div>
      list page.
      <h3>从非页面组件中查询数据</h3>
      <Header />
      <h3>从页面组件中查询数据</h3>
      <p>{data.site.siteMetadata.author}</p>
      <p>{data.site.siteMetadata.title}</p>
    </div>
  )
}

// 页面组件查询数据
export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`
