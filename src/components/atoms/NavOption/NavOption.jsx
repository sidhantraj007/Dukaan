import React from 'react'
import style from './Navoption.module.scss'
export default function NavOption({title,image}) {
  return (
    <div className={style.navoption}>
        <img src={image} className={style.image}></img>
        {title}
    </div>
  )
}

