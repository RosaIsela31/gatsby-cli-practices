import React from "react"
import { graphql } from "gatsby"
import  styled  from 'styled-components'

import Image from "../components/image"
import SEO from "../components/seo"
import { Jumbo } from "../components"

export const query = graphql`
  query GET_DATA  {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            metadata {
              img
              description
              wear
            }
          }
        }
      }
    }
  }
`

// const Button = styled.button`
//    width: 8rem;
//    background-color: #00b4d8;
//    font-weight: bold;
//     border: none;
//     border-radius: 10px;
//     color: ${props => props.color};
//     &:hover{
//       transform: scale(1.4)
//     }
// `

const IndexPage = ({ data }) => {
  console.log('DATA', data);
  const description = data.allSite.edges[0].node.siteMetadata.description
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={description}/>
      {/* <Button color="white">Comprar</Button> */}
    </>
  )
}

export default IndexPage
