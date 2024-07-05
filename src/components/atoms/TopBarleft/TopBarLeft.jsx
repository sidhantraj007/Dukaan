import React from 'react'
import { CiCircleQuestion } from "react-icons/ci";
import style from './TopBarLeft.module.scss'
export default function TopBarLeft() {
  return (
    <div className={style.topBarLeft}>
      <div className={style.payout}>Payouts</div>
      <div className={style.hiw}> <CiCircleQuestion />How it works</div>
    </div>
  )
}
