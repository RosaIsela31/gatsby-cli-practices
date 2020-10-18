import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from "../styles/components"
// import './layout.css'

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img className="logoimg" src="https://us.123rf.com/450wm/sellingpix/sellingpix1509/sellingpix150900012/45446570-stock-vector-hanger-fashion-text-logo-store-design-vector-template-creative-idea-for-clothes-outwear-shop-logotyp.jpg?ver=6" alt="logo" />
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
