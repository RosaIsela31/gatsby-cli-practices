import React from 'react'
import SEO from '../components/seo'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function successfulPage() {
  return (
    <div>
      <SEO title="successful purchase" />
      <Purchase>
        <h2>Compra Exitosa </h2>
        <p>Espero que disfrutes tu ropa </p>
        <span role="img" aria-label="emoji ">❤️</span>
        <Link to='/'>
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
      
    </div>
  )
}
