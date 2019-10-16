import React from 'react'
import './ProductCategoryRow.css'

export const ProductCategoryRow = props => {

  const { children } = props
  return <div className='ProductCategoryRow'>{children}</div>
}