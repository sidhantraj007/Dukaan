import React from 'react'
import style from './CreditCount.module.scss'
import { RiWallet3Line } from "react-icons/ri"
export default function CreditCount({amount}) {
  return (
    <div className={style.credit}>
      <div className={style.wallet}><RiWallet3Line/></div>   
      <div className={style.walletData}>
        <div className={style.walletText}>Available credits</div>
        <div className={style.creditsAmount}>{amount}</div>
      </div>
    </div>
  )
}
