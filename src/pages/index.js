import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import { SEO, Jumbo } from '../components'

export const query = graphql`
  query GET_METADATA {
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
  }
`
const IndexPage = ({ data }) => {
  const { description, title } = data.allSite.edges[0].node.siteMetadata

  return (
    <>
      <SEO title="Home" />
      <Jumbo title={title} description={description} />
      <Link to="/thanks/">Go to thanks page</Link> <br />
      <Link to="/cancel/">Go to cancel page</Link>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object
}
export default IndexPage
