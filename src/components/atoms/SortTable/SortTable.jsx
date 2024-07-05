import React from 'react'
import style from './SortTable.module.scss'
import { BiTransfer } from "react-icons/bi";

export default function SortTable() {
  return (
    <div className={style.sort}> 
    Sort <BiTransfer style={{transform:"rotate(90deg)"}}/>
    </div>
  )
}
