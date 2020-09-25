import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import { SEO, Jumbo, Image } from '../components'

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
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/thanks/">Go to thanks page</Link> <br />
      <Link to="/cancel/">Go to cancel page</Link>
    </>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object
}
export default IndexPage
