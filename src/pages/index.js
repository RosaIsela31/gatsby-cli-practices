import React from "react"
import { Link, graphql } from "gatsby"
import  styled  from 'styled-components'

import Image from "../components/image"
import SEO from "../components/seo"
import { Jumbo } from "../components"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const Button = styled.button`
   width: 8rem;
   background-color: #00b4d8;
   font-weight: bold;
    border: none;
    border-radius: 10px;
    color: ${props => props.color};
`

const IndexPage = ({ data }) => {
  const description = data.allSite.edges[0].node.siteMetadata.description
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={description}/>
      <Button color="white">Comprar</Button>
    </>
  )
}

export default IndexPage
