import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import { SEO, Jumbo, Products } from '../components'

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
            title
          }
        }
      }
    }
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
`
const IndexPage = ({ data }) => {
  const { description, title } = data.allSite.edges[0].node.siteMetadata

  return (
    <>
      <SEO title="Home" />
      <Jumbo title={title} description={description} />
      <Products products={data.allStripePrice.edges} />
      <Link to="/thanks/">Go to thanks page</Link> <br />
      <Link to="/cancel/">Go to cancel page</Link>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object
}
export default IndexPage
