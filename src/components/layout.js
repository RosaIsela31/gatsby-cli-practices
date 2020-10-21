import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/index"
import { Box } from "theme-ui"



import Header from "./header"

const Layout = ({ children }) => {


  return (
    <ThemeProvider ThemeProvider theme={theme}>
      <Header />
      <Box as="div"
        __css={{
          paddingTop: "4.5rem"
        }}
      >
        <main>{children}</main>
        <Box
          as="footer"
          __css={{
            bg: "purplePrimary",
            height: "5rem",
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          ♡ Fashion
        </Box>
      </Box>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
