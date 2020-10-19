import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components'
import priceFormat from '../utils/priceFormat'
import { CarContext } from '../context'

export default function Car() {
  const { car } = useContext(CarContext)
  return (
    <StyledCart>
      <h2>Carrito de compra</h2>
      <table>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {car.map(item => (
            <tr key={item.sku}>
              <td>
                <img src={item.metadata.img} alt={item.name} />
                {item.name}
              </td>
              <td>MXN {priceFormat(item.unit_amount)}</td>
              <td>{item.quantity}</td>
              <td>{priceFormat(item.unit_amount * item.quantity)}</td>
            </tr>
          ))}
            <nav>
              <div>
                <h3>Subtotal: </h3>
                <small>Total</small>
              </div>
              <div>
                <Link to='/'>
                  <Button type='outline'>Volver</Button>
                </Link>
                <Button>Comprar</Button>
              </div>
            </nav>
        </tbody>
      </table>
    </StyledCart>
  )
}
