import React, { useState } from 'react'

import { SelectStars } from '../styles/components'

const Stars = () => {
  const [rating, setRating] = useState(5)
  return (
    <SelectStars selected={rating}>
      <span onClick={() => setRating(1) }>★</span>
      <span onClick={() => setRating(2) }>★</span>
      <span onClick={() => setRating(3) }>★</span>
      <span onClick={() => setRating(4) }>★</span>
      <span onClick={() => setRating(5) }>★</span>
    </SelectStars>
  )
}

export default Stars
