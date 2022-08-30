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
