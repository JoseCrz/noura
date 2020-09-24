import React from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components'

import { Button, Purchase } from '../styles/components'
const Thanks = () => {
  return (
    <div>
      <SEO title='Successful purchase' />
      <Purchase>
        <h2>We&apos;ve recieved your order</h2>
        <p>We hope you love your croissant</p>
        <p>Your order is been prepared, you&apos;ll get it soon</p>
        <span role='img' aria-label='fire emoji'>🔥</span>
        <Link to='/'>
          <Button>Back to menu</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default Thanks
