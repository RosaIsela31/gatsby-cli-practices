import React from 'react'
import { StyledJumbo } from '../styles/components'
import { Image } from './'
// import './layout.css'

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Ya comprate ropa</h2>
        <small> {description} </small>
      </div>
      <Image className="woman" name='icon'/>
    </StyledJumbo>
  )
}
