import React from 'react'
import PropTypes from 'prop-types'

import { ProductDetail } from '../components'

const Products = ({ pageContext }) => {
  return (
    <>
      <ProductDetail {...pageContext} />
    </>
  )
}

Products.propTypes = {
  pageContext: PropTypes.object
}

export default Products
