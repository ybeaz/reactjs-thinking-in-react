import React, { useContext, useState, useEffect } from 'react';
import { InputContext } from './index'
import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'
import './FilterableProductTable.css'

export const FilterableProductTable = props => {
  const Input = useContext(InputContext)
  let inputFiltered = Input

  const [val, setVal] = useState('')
  const [check, setCheck] = useState(false)

  const getInputFiltered = (Input, val, check) => {
    let inputFiltered = Input
    if (check === true) {
      inputFiltered = Input.filter(item => item.stocked === true)
    }
    inputFiltered = inputFiltered.filter(item => item.name.toLowerCase().includes(val))

    return inputFiltered
  }

  const eventActions = action => {

    switch (action.type) {

      case 'INPUT_CHANGE': {
        const { val } = action
        setVal(val)
      }
      break

      case 'INPUT_CHECK': {
        const { check } = action
        setCheck(check)
      }
      break

      default: {
        console.info('FilterableProductTable->eventActions [F] You did something strange', { action })
      }

    }
  }

  const searchBarProps = { eventActions, val, check }
  inputFiltered = getInputFiltered(Input, val, check)
  return <div className='FilterableProductTable'>
    <SearchBar {...searchBarProps} />
    <ProductTable InputFiltered={inputFiltered} />
  </div>
}
