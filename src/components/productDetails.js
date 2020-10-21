import React, { useState, useContext } from 'react'
import { CarContext } from '../context'
import priceFormat from '../utils/priceFormat'
import {
  // Tag,
  // SizeButton,
  // QtyButton,
  // SizeSelect,
  // Button,
  // StyledProductDetail,
  QtySelect
} from '../styles/components'
import { SEO, Stars } from './'
import { jsx, Box } from 'theme-ui'

export default function ProductDetails({ unit_amount, id, product: {name, metadata}  }) {
  const formatePrice = priceFormat(unit_amount)
  const [ size, setSize ] = useState(2)
  const [qty, setQty] = useState(1)
  const { addToCar } = useContext(CarContext)

  const handleSubmit = () => {
    addToCar({
      unit_amount,
      id,
      name,
      metadata,
      quantity: qty
    })
  }

  return (
    <Box
      as="div"
      __css={{
        p: "2rem 10rem",
        display: "flex",
        flexDirection: "row",
        textAlign: "justify",
        height: "82vh",
        bg: "grayLight"
      }}
    >
      <SEO title={name} />
      <Box
        as="img"
        src={metadata.img}
        alt={name}
        sx={{
          width: "50%",
          height: "32rem",
          objectFit: "cover",
          objectPosition: "center",
          m: 0,
        }}
      />
      <Box as="div"
        __css={{
          bg: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%"
        }}
      >
        <Box as="span"
          __css={{
            p: "0.3rem 1.5rem",
            bg: "gray",
            display: "inline-block",
            m: "0.5rem 0",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Productos populares
        </Box>
        <h2>{name}</h2>
        <Box
          as="b"
          __css={{
            color: "purplePrimary",
            fontSize: "1.5rem",
            m: 0,
            fontWeight: 800,
          }}
        >
          MXN {formatePrice}
        </Box>
        <Stars />
        <small>{metadata.description}</small>
        {metadata.wear && (
          <Box
            as="div"
            selected={size}
            __css={{
              display:"grid",
              width:"10rem",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "8px",
              fontSize: "0.8rem",
              mt: "0.6rem"
            }}
          >
            <Box as="button"
              onClick={() => setSize(1)}
              __css={{
                p: "calc(0.4rem)",
                bg: "transparent",
                border: "2px solid rgba(0,0,0,0.3)",
                color: "#272727",
                opacity: 1,
                transition: "0.4s all ease",
                "&:hover": {
                  transform: "scale(1.2)"
                }
              }}
            >XS
            </Box>
             <Box as="button"
              onClick={() => setSize(1)}
              __css={{
                p: "calc(0.4rem)",
                bg: "transparent",
                border: "2px solid rgba(0,0,0,0.3)",
                color: "#272727",
                opacity: 1,
                transition: "0.4s all ease",
                "&:hover": {
                  transform: "scale(1.2)"
                }
              }}
            >S
            </Box>
             <Box as="button"
              onClick={() => setSize(1)}
              __css={{
                p: "calc(0.4rem)",
                bg: "transparent",
                border: "2px solid rgba(0,0,0,0.3)",
                color: "#272727",
                opacity: 1,
                transition: "0.4s all ease",
                "&:hover": {
                  transform: "scale(1.2)"
                }
              }}
            >M
            </Box>
             <Box as="button"
              onClick={() => setSize(1)}
              __css={{
                p: "calc(0.4rem)",
                bg: "transparent",
                border: "2px solid rgba(0,0,0,0.3)",
                color: "#272727",
                opacity: 1,
                transition: "0.4s all ease",
                "&:hover": {
                  transform: "scale(1.2)"
                }
              }}
            >L
            </Box>
          </Box>
        )}
        <p>Cantidad:</p>
        <Box as="div"
          __css={{
            display: "flex",
            m: "0.6rem 0"
          }}
        >
          <Box as="button"
            onClick={() => (qty > 1 ? setQty(qty - 1) : null)}
            __css={{
              p: "0 10px",
              bg: "transparent",
              border: "2px solid rgba(0,0,0,0.1)",
              width: "40px",
              height: "40px",
              color: "#707070"
            }}
          >
            -
          </Box>
          <Box
            as="input"
            type='text'
            disabled value={qty}
            __css={{
              p: "0.4rem",
              bg: "transparent",
              borderRight: "none",
              borderLeft: "none",
              borderTop: "2px solid rgba(0,0,0,0.1)",
              borderBottom: "2px solid rgba(0,0,0,0.1)",
              height: "40px",
              width: "40px",
            }}
          />
          <Box as="button"
            onClick={() => setQty(qty + 1)}
               __css={{
              p: "0 10px",
              bg: "transparent",
              border: "2px solid rgba(0,0,0,0.1)",
              width: "40px",
              height: "40px",
              color: "#707070"
            }}
          >
            +
          </Box>
          </Box>
        <Box
          as="button"
          onClick={handleSubmit}
          __css={{
            cursor: "pointer",
            bg: "purplePrimary",
            color: "white",
            fontSize: "0.9rem",
            p: "0.6rem 1rem",
            fontWeight: 500,
            border: "3px solid white",
            borderRadius: "12px",
          }}
        >
          Agregar al carrito
        </Box>
      </Box>
     </Box>
  )
}
