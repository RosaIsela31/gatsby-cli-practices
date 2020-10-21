import React from 'react'
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { jsx, Box } from "theme-ui"
import woman from '../images/woman.png'


export default function Image({ name }) {
  const data = useStaticQuery(
      graphql `
        query GET_IMAGE {
          icon: file(relativePath: {
            eq: "woman.png"
          }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
  )

  return (
    <Box as="image" src={woman} 
      __themeKey="styles" variant="img"
      
    />
  )
}
