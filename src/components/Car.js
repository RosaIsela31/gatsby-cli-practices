/** @jsx jsx */
import React, { useContext, useEffect, useState } from "react"
  import priceFormat from "../utils/priceFormat"
  import { CarContext } from "../context"
import { Link } from "gatsby"
  import { jsx, Box } from 'theme-ui'
  
  export default function Car() {
    const { car } = useContext(CarContext)
    const [total, setTotal] = useState(0)
    const [stripe, setStripe] = useState()
    const getTotal = () => {
      setTotal(
        car.reduce(
          (acc, current) => acc + current.unit_amount * current.quantity,
          0
        )
      )
    }
    useEffect(() => {
      setStripe(window.Stripe(process.env.STRIPE_PK))
      getTotal()
    }, [])

    const handleBuy = async event => {
      event.preventDefault()
      let item = car.map(({ id, quantity }) => {
        console.log('id', id);
        console.log('qty', quantity);
        return ({
          price: id,
          quantity: quantity,
        })
      })

      const { error } = await stripe.redirectToCheckout({
        lineItems: item,
        mode: "payment",
        successUrl: process.env.SUCCESS_REDIRECT,
        cancelUrl: process.env.CANCEL_REDIRECT,
      })
      if (error) {
        throw error
      }
    }
    return (
      <>
        <Box as="div"
          __css={{
            p: "1rem",
            height: "80vh",
            overflowY: "scroll",
            bg: "mateLight"
          }}
        >
          <Box
            as="h2"
            __css={{
              borderBottom: "2px solid black"
            }}
          >
            Tu carrito de compras
          </Box>
          <table>
            <tbody>
              <tr>
                <Box
                  as="th"
                  __css={{
                    color: "#959595",
                    m: 0,
                    border: "none"
                  }}
                >
                  Producto
                </Box>
                 <Box
                  as="th"
                  __css={{
                    color: "#959595",
                    m: 0,
                    border: "none"
                  }}
                >
                  Precio
                </Box>
                 <Box
                  as="th"
                  __css={{
                    color: "#959595",
                    m: 0,
                    border: "none"
                  }}
                >
                  Cantidad
                </Box>
                 <Box
                  as="th"
                  __css={{
                    color: "#959595",
                    m: 0,
                    border: "none"
                  }}
                >
                  Total
                </Box>
              </tr>
              {car.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.metadata.img} alt={item.name} sx={{ width:"100px" }} />
                  </td>
                  <td>{priceFormat(item.unit_amount)}</td>
                  <td>{item.quantity}</td>
                  <td>{priceFormat(item.quantity * item.unit_amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav sx={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
            <div sx={{display:"flex", alignItems:"baseline", width: "250px", justifyContent: "space-between"}}>
              <h3>Subtotal:</h3>
              <small sx={{ color:"#505050", fontSize:"0.9rem" }}>MXN {priceFormat(total)}</small>
            </div>
            <div>
              <Link to="/">
                <Box as="button" type="outline"
                  __css={{
                    cursor: "pointer",
                    bg: "transparent",
                    color: "purplePrimary",
                    fontSize: "0.9rem",
                    p: "0.6rem 1rem",
                    fontWeight: 500,
                    border: "3px solid #665DCA",
                    borderRadius: "12px"
                  }}
                >
                  Regresar
                </Box>
              </Link>
              <Box as="button"
                onClick={handleBuy} disabled={car.length === 0}
                 __css={{
                    cursor: "pointer",
                    bg: "#BB757D",
                    color: "white",
                    fontSize: "0.9rem",
                    p: "0.6rem 1rem",
                    fontWeight: 500,
                    border: "3px solid #BB757D",
                    borderRadius: "12px"
                  }}
              >
                Comprar
              </Box>
            </div>
          </nav>
        </Box>
      </>
    )
  }