import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Products({ data }) {
  return data.allProductsJson.nodes.map(item => (
    <div key={item.jsonId}>
      <p>{item.title}</p>
      <div style={{ width: 200 }}>
        {/* <Img fluid={item.url.childImageSharp.fluid} /> */}
        <Img fixed={item.url.childImageSharp.fixed}  />
      </div>
    </div>
  ))
}

// export const query = graphql`
//   query {
//     allProductsJson {
//       nodes {
//         title
//         jsonId
//         albumId
//         url {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query {
    allProductsJson {
      nodes {
        title
        jsonId
        albumId
        url {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
