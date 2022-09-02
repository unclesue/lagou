import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

export default function Seo({ title, description, meta, lang }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s - ${data.site.siteMetadata.title}`}
      meta={[{ name: "description", content: description }].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  description: "default description",
  meta: [],
  lang: "en",
}
