import React from 'react'
import { Link } from 'gatsby'
import priceFormat from '../utils/priceFormat'
import { StyledProducts } from '../styles/components'
import { jsx, Box } from "theme-ui"
import { Image } from 'theme-ui'


export default function Product({products}) {
  return (
    <Box
      __css={{
        bg: "#ced4da",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "2rem 1rem 5rem 1rem"
      
      }}
    >
      <Box 
        as="h2"
        __css={{
          color: "purplePrimary",
          fontSize: "2rem",
          mb: "2rem",
        }}
      >Productos</Box>
      <Box as="section"
        __css={{
          display: "grid",
          gridGap: "2rem",
          width: "100%",
          gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
          p: 0,

        }}
      >
        {products.map(({node}) => {
          const price = priceFormat(node.unit_amount)
        return (
          <Box
            as="article" key={node.id}
            __css={{
              display: "flex",
              flexDirection: "column",
              bg: "white",
              alignItems: "center",
              paddingBottom: "1rem",
              boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              borderRadius: "10px",
              m: "1rem",
              "&:hover": {
                boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
              }
            }}
          >
            <Image src={node.product.metadata.img} alt={node.product.name}
              __css={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                objectPosition: "center",
                m: 0,
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Box
              as="p"
              __css={{
                m: 0,
                color: "black",
                fontWeight: "500",
                fontSize: "1.2rem"
              }}
            >
              {node.product.name}
            </Box>
            <Box
              as="small"
              __css={{
                color: "purplePrimary",
                fontWeight: 500,
                fontSize: "1.2rem"
              }}
            >
              MXN {price}
            </Box>
            <Link to={`/${node.id}`}
              sx={{
                textDecoration: "none",
                color: "pink",
                fontSize: "3rem",
                borderBotton: "3px solid purplePrimary"
              }}
            >
              Comprar ahora
            </Link>
          </Box>
        )
        })}
      </Box>
    </Box>
  )
}
