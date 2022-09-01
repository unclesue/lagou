const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const PersonTemplate = require.resolve("./src/templates/person.js")
  const persons = [
    { slug: "zhangsan", name: "张三", age: 20 },
    { slug: "lisi", name: "李四", age: 22 },
  ]
  persons.forEach(item => {
    createPage({
      path: `/persons/${item.slug}`,
      component: PersonTemplate,
      context: item,
    })
  })

  // 构建文章详情页
  const PostTemplate = require.resolve("./src/templates/post.js")
  const { data } = await graphql(`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/post/"}}) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(item => {
    createPage({
      path: `/posts/${item.fields.slug}`,
      component: PostTemplate,
      context: {
        slug: item.fields.slug
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const parent = getNode(node.parent)

  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark" && parent?.sourceInstanceName === "markdown") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "data/post/",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug2",
      value: `/posts${relativeFilePath}`,
    })

    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
