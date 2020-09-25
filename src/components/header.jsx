import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledHeader, MenuItem } from '../styles/components'
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to='/'>
      <img src='' alt='Noura Logo'/>
    </Link>
    <nav>
      <ul>
        <MenuItem>
          <Link to='/'>Menu</Link>
        </MenuItem>
        <MenuItem>
          <a href='https://www.instagram.com/noura.gourmet/' target='_blank' rel='noreferrer'>Instagram</a>
        </MenuItem>
        <MenuItem>
          <Link to='/cart'>
            <span>
              <img src='https://i.postimg.cc/L6wpMxLt/cart.png' alt='Cart'/>
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
