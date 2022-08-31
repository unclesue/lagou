import { graphql } from "gatsby"
import React from "react"

function Post({ data }) {
  return <>
    <p>{data.markdownRemark.frontmatter.title}</p>
    <p>{data.markdownRemark.frontmatter.date}</p>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
  </>
}

export default Post

export const query = graphql`
  query ($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        date
        title
      }
      id
    }
  }
`
