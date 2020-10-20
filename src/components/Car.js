  import React, { useContext, useEffect, useState } from "react"
  import { StyledCart, Button } from "../styles/components"
  import priceFormat from "../utils/priceFormat"
  import { CarContext } from "../context"
  import { Link } from "gatsby"
  
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
        <StyledCart>
          <h2>Tu carrito de compras</h2>
          <table>
            <tbody>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
              {car.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.metadata.img} alt={item.name} />
                  </td>
                  <td>{priceFormat(item.unit_amount)}</td>
                  <td>{item.quantity}</td>
                  <td>{priceFormat(item.quantity * item.unit_amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav>
            <div>
              <h3>Subtotal: </h3>
              <small>MXN {priceFormat(total)}</small>
            </div>
            <div>
              <Link to="/">
                <Button type="outline">Regresar</Button>
              </Link>
              <Button onClick={handleBuy} disabled={car.length === 0}>
                Comprar
              </Button>
            </div>
          </nav>
        </StyledCart>
      </>
    )
  }