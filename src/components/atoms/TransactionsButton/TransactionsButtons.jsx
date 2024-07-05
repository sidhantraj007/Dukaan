import React from 'react'
import style from './TransactionButton.module.scss'
 export default function TransactionsButton({item}) {
    console.log(item)
     const arr = item.title.split(" ")
  return (
    <div className={style.buttonContainer} style={ (arr.includes("Refunds")) ? {backgroundColor:"rgb(20, 110, 180)",color:"white"}:{}}>
        {item.title}
    </div>
  )
}
