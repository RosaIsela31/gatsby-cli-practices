import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import { MenuItem, StyledHeader } from "../styles/components"
import Logo from '../images/logo.png'
import { CarContext } from '../context'
import { jsx, Box, useThemeUI } from "theme-ui"
 

const Header = () => {
  const { car } = useContext(CarContext)

  return (
    <Box
      __css={{
        bg: "pinkPrincipal"
      }}
    >
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
                <img
                  className="car-img"
                  src="https://i.postimg.cc/L6wpMxLt/cart.png"
                  alt="carlogo"
                />
                {car.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </Box>
  )}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
