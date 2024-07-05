import React from 'react'
import style from './HeaderOption.module.scss'

export default function HeaderOption({image}) {
  return (
    <div className={style.optionsContainer}>
       <img src={image}></img>
    </div>
  )
}
