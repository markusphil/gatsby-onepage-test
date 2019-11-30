const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const homeTemplate = path.resolve(`src/templates/homeTemplate.js`)
  const result = await graphql(`
    {
      allDirectory(filter: { sourceInstanceName: { eq: "content" } }) {
        edges {
          node {
            id
            relativePath
            relativeDirectory
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allDirectory.edges.forEach(({ node }) => {
    // create home pages
    if (node.relativeDirectory === 'home') {
      const lang = node.relativePath.replace('home/', '')
      createPage({
        path: node.relativePath.replace('home', ''),
        component: homeTemplate,
        context: {
          langpath: '/' + node.relativePath + '/',
          lang: lang,
        }, // additional data can be passed via context
      })
    }
  })
}
