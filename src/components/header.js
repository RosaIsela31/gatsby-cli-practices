import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader  } from "../styles/components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <img src="https://us.123rf.com/450wm/sellingpix/sellingpix1509/sellingpix150900012/45446570-stock-vector-hanger-fashion-text-logo-store-design-vector-template-creative-idea-for-clothes-outwear-shop-logotyp.jpg?ver=6" alt="logo " />
    </Link>
    <nav>
      <ul>
        <MenuItem>
          <Link to="/">Ver todo</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/faldas">Faldas</Link>
        </MenuItem>
      </ul>
    </nav>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
