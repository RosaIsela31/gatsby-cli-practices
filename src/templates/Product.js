import React from 'react'
import 
  ProductDetails
 from '../components/productDetails'

export default function Product({pageContext}) {
  return (
    <ProductDetails {...pageContext}/>
  )
}
