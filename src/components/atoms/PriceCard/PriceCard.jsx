import React from 'react'
import style from './PriceCard.module.scss'
import { CiCircleQuestion } from "react-icons/ci";

export default function PriceCard({data}) {
  

  const cardStyles = {
    common: {
      color: 'black',
      gap: '14px',
      padding: '0 0 0 0',
    },
    nextPayout: {
      backgroundColor: '#146EB4',
      color: 'white',
      height: '95%',
      padding: '4% 2% 0 2%',
    },
  };
  {/*  style={(data.title==="Next Payout") ? {backgroundColor:"#146EB4",color:"white",height:"95%",padding:"4% 3%% 0% 5%"}:{backgroundColor:"white",color:"black",gap:"14px",padding:"0 0 0 0"}} */}
  return (
    <div className={style.card} style={(data.title!=="Next Payout") ? cardStyles.common : cardStyles.nextPayout}>
        <div className={style.cardtitle}>
          {data.title} <CiCircleQuestion />
        </div>
        <div className={style.cardinfo}>
          <div className={style.price}>
          ₹{data.price}
          </div>
          {(data.orders!=0) && <div className={style.orders}>
              {data.orders} <a>Orders</a>
          </div>}
        </div>
        { (data.title=="Next Payout") && 
        (<div className={style.nextPayout}>
            <div> Next payout </div>
            <div> {data.payoutDate}</div>
        </div>)}
    </div>
  )
}
