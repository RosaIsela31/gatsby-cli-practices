/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {useContext} from "react"
// import { MenuItem, StyledHeader } from "../styles/components"
import Logo from '../images/logo.png'
import { CarContext } from '../context'
import { jsx, Box } from "theme-ui"

 

const Header = () => {
  const {car} = useContext(CarContext)

  return (
    <Box
      __css={{
        bg: "purplePrimary",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "2rem"
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" sx={{width: "5rem", m: 3,borderRadius: "150px"}}/>
      </Link>
      <nav >
        <Box
            as="ul"
            __css={{
              listStyle: "none",
              display: "flex",
              flexDirection: "row",
            }}
          >
          <Box as="li" margin
            __css={{py:50}}
          >
              <Box
              as={Link}
              to="/"
                __css={{
                  lineHeight: 1,
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >Ver todo
              </Box>
          </Box>
          <Box as="li"
            __css={{py:45}}
          >
            <Box
            as={Link}
            to = "/car"
            __css = {
              {
                lineHeight: 1,
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
                px: 7,
              }
            } >
              <span>
                <img
                  className="car-img"
                  src="https://i.postimg.cc/L6wpMxLt/cart.png"
                  alt="carlogo"
                />
                {car.length}
              </span>
            </Box>
          </Box>
        </Box>
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
