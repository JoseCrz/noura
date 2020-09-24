import React from 'react'
import { Link } from 'gatsby'

import { Layout, SEO, Jumbo, Image } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/thanks/">Go to thanks page</Link> <br />
    <Link to="/cancel/">Go to cancel page</Link>
  </Layout>
)

export default IndexPage
