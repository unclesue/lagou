const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const PersonTemplate = require.resolve("./src/templates/person.js")
  const persons = [
    { slug: "zhangsan", name: "张三", age: 20 },
    { slug: "lisi", name: "李四", age: 22 },
  ]
  persons.forEach(item => {
    createPage({
      path: `/person/${item.slug}`,
      component: PersonTemplate,
      context: item,
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "data/post/",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/post${relativeFilePath}`,
    })

    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug2",
      value: slug,
    })
  }
}
