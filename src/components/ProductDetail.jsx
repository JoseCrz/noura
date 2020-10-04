import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SEO, Stars } from '../components'
import { Tag, SizeButton, QtySelect, QtyButton, SizeSelect, StyledProductDetail } from '../styles/components'

const ProductDetail = ({ id, product, unit_amount: unitAmount }) => {
  const [size, setSize] = useState(1)
  const [quantity, setQuantity] = useState(1)

  return (
    <StyledProductDetail>
      <SEO title={product.name} />
      <img src={product.metadata.img} alt={product.name}/>
      <div>
        <Tag>HOT</Tag>
        <h2>{product.name}</h2>
        <b>USD {unitAmount} </b>
        <Stars />
        <SizeSelect selected={size} >
          <SizeButton onClick={() => setSize(1)} >S</SizeButton>
          <SizeButton onClick={() => setSize(2)} >M</SizeButton>
          <SizeButton onClick={() => setSize(3)} >L</SizeButton>
          <SizeButton onClick={() => setSize(4)} >XL</SizeButton>
        </SizeSelect>
        <p>Quantity</p>
        <QtySelect>
          <QtyButton onClick={() => quantity > 1 && setQuantity(quantity - 1)}> - </QtyButton>
          <input value={quantity} type='text' disabled />
          <QtyButton onClick={() => setQuantity(quantity + 1)}> + </QtyButton>
        </QtySelect>
      </div>
    </StyledProductDetail>
  )
}

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired,
  unitAmount: PropTypes.number.isRequired
}

export default ProductDetail
