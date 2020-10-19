import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from "../styles/components"
import Logo from '../images/logo.png'
// import './layout.css'

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img className="logoimg" src={Logo} alt="logo" />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Ver todo</Link>
        </MenuItem>
        <MenuItem margin>
          <Link to="/faldas">Faldas</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/car">
            <span>
              <img className="car-img" src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="carlogo" />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
