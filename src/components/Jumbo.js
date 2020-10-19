import React from 'react'
import { StyledJumbo } from '../styles/components'
import { Image } from './'
// import './layout.css'

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Es tiempo de comprar ropa</h2>
        <small> {description} </small>
      </div>
      <Image className="woman" name='icon'/>
    </StyledJumbo>
  )
}
