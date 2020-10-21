import React, { useState, useContext } from 'react'
import { CarContext } from '../context'
import priceFormat from '../utils/priceFormat'
import {
  // Tag,
  SizeButton,
  // QtyButton,
  SizeSelect,
  // Button,
  StyledProductDetail,
  QtySelect
} from '../styles/components'
import { SEO, Stars } from './'
import { Box } from 'theme-ui'

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
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
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
        <b>MXN {formatePrice}</b>
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
          <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type='text' disabled value={qty} />
          <button onClick={() => setQty(qty+1)}>+</button>
          </QtySelect>
        <Box
          as="button"
          onClick={handleSubmit}
          __css={{
            cursor: "pointer",
            bg: "pink",
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
      </div>
     </StyledProductDetail>
  )
}
