import React from 'react'
import './SearchBar.css'

export const SearchBar = props => {

  const { eventActions, val, check } = props
  return <div className='SearchBar'>
    <input
      type='text'
      onChange={e => eventActions({type: 'INPUT_CHANGE', val: e.target.value})}
      value={val}
    />
    <div className='SearchBar__checkBoxWrapper'>
      <input
        className='SearchBar__checkBox'
        type='checkbox'
        onChange={e => eventActions({type: 'INPUT_CHECK', check: e.target.checked })}
        checked={check}
      />
      <div className='SearchBar__checkBoxText'>Only show products in stock</div>
    </div>
  </div>
}