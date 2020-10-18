import React from 'react'
import SEO from '../components/seo'
import {
  Button,
  Purchase
} from '../styles/components'
import {
  Link
} from 'gatsby'

export default function cancel() {
  return ( <div>
    <SEO title = "successful purchase" />
    <Purchase>
      <h2> Compra cancelada </h2>
      <Link to='/'>
        <Button> Volver al catálogo </Button> 
      </Link> 
    </Purchase>
    </div>
  )
}
