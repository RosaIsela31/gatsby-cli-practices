import React from 'react'
import { Link } from 'gatsby'
import priceFormat from '../utils/priceFormat'
import { StyledProducts } from '../styles/components'

export default function Product({products}) {
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({node}) => {
          const price = priceFormat(node.unit_amount)
        return (
          <article key={node.id}>
          <img src={node.product.metadata.img} alt={node.product.name} />
          <p>{node.product.name}</p>
          <small>MXN {price}</small>
          <Link to={`/${node.id}`}>Comprar ahora</Link>
          </article>
        )
        })}
      </section>
    </StyledProducts>
  )
}
