/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/components"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/index"
import { Box } from "theme-ui"



import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {


  return (
    <ThemeProvider ThemeProvider theme={theme}>
      <Header />
      <Content>
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
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
