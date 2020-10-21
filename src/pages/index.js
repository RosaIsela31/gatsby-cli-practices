import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Product } from "../components"

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

const IndexPage = ({ data }) => {
  console.log('DATA', data);
  const description = data.allSite.edges[0].node.siteMetadata.description
  return (
    <>
      <SEO title="Home" />
      {/* <Jumbo description={description} /> */}
      <Product products={data.allStripePrice.edges} />
    </>
  )
}

export default IndexPage
