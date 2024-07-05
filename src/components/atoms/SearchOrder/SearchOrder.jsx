import React from 'react'
import style from './SearchOrder.module.scss'
export default function SearchOrder() {
  return (
    <div className={style.inputContainer}>
        <input className={style.inputField} placeholder='Order ID or transaction ID'/>
    </div>
  )
}
