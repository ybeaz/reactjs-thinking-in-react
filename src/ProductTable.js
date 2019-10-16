import React, {Fragment} from 'react'
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'
import './ProductTable.css'

export const ProductTable = props => {

  const { InputFiltered: Input } = props
 
  const getArrUniqueCategories = (arr, propertyName) => {
    const categoriesObj = {}
    Input.forEach(item => {
      categoriesObj[item[propertyName]] = true
    })
    return Object.keys(categoriesObj)

    // Yet another variant
    let categoriesArr_ = Input.filter((item, i, arr) => {
      return i === 0 || ( arr[i - 1] && item.category !== arr[i - 1].category ) ? true : false 
    })
  }

  const categoriesArr = getArrUniqueCategories(Input, 'category')
  // console.info('ProductTable [C]', { categoriesArr_, categoriesArr })

  const getProductTableContent = (categoriesArr, Input) => {

    return categoriesArr.map((category, c) => {
      const productSectionArr = Input.filter(inpItem => inpItem.category === category)
      
      const productSection = productSectionArr.map((item, i) => {
        const { name, price } = item
        const productRowProps = { name, price }
        return <ProductRow key={`prod_${i}`} {...productRowProps} />
      })
      
      return <Fragment key={`cat_${c}`}>
        <ProductCategoryRow>{category}</ProductCategoryRow>
        <>{productSection}</>
      </Fragment>

    })
  }

  return <div className='ProductTable'>
    {getProductTableContent(categoriesArr, Input)}
  </div>
}