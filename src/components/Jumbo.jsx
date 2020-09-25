import React from 'react'
import PropTypes from 'prop-types'

import BackgroundImage from './BackgroundImage'

import { StyledJumbo } from '../styles/components'

const Jumbo = ({ title, description }) => {
  return (
    <StyledJumbo>
      <div>
        <h2>{title}</h2>
        <small>{description}</small>
      </div>
      <BackgroundImage />
    </StyledJumbo>
  )
}

Jumbo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Jumbo
