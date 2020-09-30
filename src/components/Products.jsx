import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { StyledProducts } from '../styles/components'

const Products = ({ products }) => {
  return (
    <StyledProducts>
      <h2>Menu</h2>
      <section>
        {
          products.map(({ node }) => {
            const { id, product, unit_amount: unitAmount } = node

            return (
              <article key={id}>
                <img src={product.metadata.img} alt={product.name}/>
                <p>{product.name}</p>
                <small>{unitAmount}</small>
                <Link to={`/${id}`}>
                  Buy now
                </Link>
              </article>
            )
          })
        }
      </section>
    </StyledProducts>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.string,
        product: PropTypes.object,
        unit_amount: PropTypes.number
      })
    )
  )
}

export default Products
