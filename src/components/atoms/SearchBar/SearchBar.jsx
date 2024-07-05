import React from 'react'
import style from './Searchbar.module.scss'
export default function SearchBar() {
  return (
    <div className={style.searchbar}>
        <input type='text' className={style.searchInput} placeholder='Search features, tutorials, etc.'></input>
    </div>
  )
}
