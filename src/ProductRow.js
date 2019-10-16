import React from 'react'
import './ProductRow.css'

export const ProductRow = props => {

  const { name, price } = props
  return <div className='ProductRow'>
    <div className='ProductRow__name'>{name}</div>
    <div className='ProductRow__price'>{price}</div>
  </div>
}