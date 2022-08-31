import React from "react"
import { graphql } from "gatsby"

export default function Posts({ data }) {
  return data.allMarkdownRemark.nodes.map(item => (
    <div key={item.id}>
      <p>{item.frontmatter.title}</p>
      <p>{item.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: item.html }}></div>
      <hr />
    </div>
  ))
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        html
        frontmatter {
          date
          title
        }
      }
    }
  }
`
