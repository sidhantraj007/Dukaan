import React from 'react'
import Table from '../components/atoms/Table/Table'
import TimeFilter from '../components/atoms/TimeFilter/TimeFilter'
import style from './DashBoard.module.scss'
import PriceCard from '../components/atoms/PriceCard/PriceCard'
import ordersData from '@content/Table/data.js'
import cardData from '@content/Card/data.js'
import TransactionsButton from '../components/atoms/TransactionsButton/TransactionsButtons' 
import dataButton from '@content/ButtonData/data.js'
import SearchOrder from '../components/atoms/SearchOrder/SearchOrder'
import SortTable from '../components/atoms/SortTable/SortTable'
import DownloadTable from '../components/atoms/DownloadTable/DownloadTable'
export default function DashBoard() {
  return (
    <div className={style.dashboard}>
        <div className={style.upperContainer}>
           <div className={style.description}>
             <div className={style.overview}>Overview</div>
             <div className={style.timefilter}><TimeFilter/></div>
           </div>
           <div className={style.CardContainer}>
               {
                cardData.map((cardData,i)=>{
                    return (<div className={style.priceCardContainer} key={i}><PriceCard data={cardData} key={i}/></div>)
                })
               }
           </div>
        </div>
        <div className={style.lowerContainer}>
            <div className={style.lowerHeader}>
                Transactions | This Month
            </div>
            <div className={style.buttonContainer}>
                  {
                    dataButton.map((item,i)=>{
                      return(<TransactionsButton item={item} key={i}></TransactionsButton>)
                    })
                  }
            </div>
            <div className={style.tablewrap}>
      
               <div className={style.tableHeader}>
                <div className={style.searchoption}> <SearchOrder/></div>
                <div className={style.moreoptions}>
                   <SortTable/>
                   <DownloadTable/>
                </div>
               </div>
               <div className={style.tableDiv}>
                <Table data={ordersData}/>
               </div>
            </div>
        </div>
    
    </div>
  )
}
