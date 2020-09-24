import React from 'react'
import { SEO } from '../components'
import { Purchase, Button } from '../styles/components'
import { Link } from 'gatsby'
const Cancel = () => {
  return (
    <>
      <SEO title='Purchase cancelled' />
      <Purchase>
        <h2>We&apos;re sorry you had to cancel</h2>
        <p>Your croissant will be waiting for you when you are ready</p>
        <span role='img' aria-label='heart emoji'>❤️</span>
        <Link>
          <Button>Back to menu</Button>
        </Link>
      </Purchase>
    </>
  )
}

export default Cancel
