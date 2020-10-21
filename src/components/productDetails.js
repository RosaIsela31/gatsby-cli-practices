import React, { useState, useContext } from 'react'
import { CarContext } from '../context'
import priceFormat from '../utils/priceFormat'
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
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
        <Tag>Productos populares</Tag>
        <h2>{name}</h2>
        <b>MXN {formatePrice}</b>
        <Stars />
        <small>{metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
          <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type='text' disabled value={qty} />
          <button onClick={() => setQty(qty+1)}>+</button>
          </QtySelect>
          <Button onClick={handleSubmit}>Agregar al carrito</Button>
      </div>
     </StyledProductDetail>
  )
}
