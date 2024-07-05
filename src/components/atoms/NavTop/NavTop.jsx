import React from 'react'
import userImage from '@assets/images/User.png'
import { FaChevronDown } from "react-icons/fa";

import style from './Navtop.module.scss'
export default function Navtop() {
  return (
    <div className={style.Navtop}>
      <div className={style.profile}> <img style={{height:"56px",width:"56px"}} src={userImage}></img></div>
      <div className={style.text}>
        <div className={style.userName}>Nishyan</div>
        <div><a href='#' className={style.link} style={{color:"white"}}>Visit store</a></div>
      </div>
      <div className={style.dropDown}>
        <FaChevronDown style={{color:"white"}}></FaChevronDown>
      </div>
    </div>
  )
}
