const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve('src/templates/Products.jsx')

  const result = await graphql(`
      query GET_PRODUCTS {
        allStripePrice {
          edges {
            node {
              id
              product  {
                name
                metadata {
                  img
                  description
                  vegan
                }
              }
              unit_amount
            }
          }
        }
      }
    `)

  if (result.errors) throw result.errors

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate
    })
  })
}
